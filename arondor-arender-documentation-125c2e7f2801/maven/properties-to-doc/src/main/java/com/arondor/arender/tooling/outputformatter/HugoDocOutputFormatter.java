package com.arondor.arender.tooling.outputformatter;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import com.arondor.arender.tooling.ARenderProperty;
import com.arondor.arender.tooling.ARenderPropertyStructuredList;

public class HugoDocOutputFormatter extends AbstractOutputFormatter
{

    private static final String HEADER_FORMAT = String.join("\n", "---", "title: Properties", "description: %s",
            "draft: false", "icon: mdi mdi-format-list-checks", "layout: faq",
            "keywords: [\"configuration\", \"profile\", \"property\" ]", "---");

    private static final String SECTION_START_FORMAT = "## %s \n | property | Description | type | default |\n| --------- | --------- | --------- | --------- |\n";

    private static final String SECTION_END = "\n";

    public HugoDocOutputFormatter(final ARenderPropertyStructuredList arenderProperties)
    {
        super(arenderProperties);
    }

    public Map<String, List<ARenderProperty>> propertyListToPropertyMap(final Iterable<ARenderProperty> properties)
    {
        final Map<String, List<ARenderProperty>> result = new TreeMap<>();
        for (final ARenderProperty property : properties)
        {
            final String[] splitResults = property.getName().split("\\.", 2);
            List<ARenderProperty> propertyList = result.get(splitResults[0]);
            if (propertyList == null)
            {
                propertyList = new ArrayList<>();
                result.put(splitResults[0], propertyList);
            }
            propertyList.add(property);
        }
        return result;
    }

    public String buildHugoFormatFromArenderPropertyList(final List<ARenderProperty> properties)
    {
        final Map<String, List<ARenderProperty>> propertyMap = propertyListToPropertyMap(properties);
        final StringBuilder builder = new StringBuilder();
        for (final Map.Entry<String, List<ARenderProperty>> entry : propertyMap.entrySet())
        {
            builder.append(String.format(SECTION_START_FORMAT, entry.getKey()));
            for (final ARenderProperty property : entry.getValue())
            {
                builder.append(generatePropertyRendering(property.getName(), property.getType(),
                        property.getDefaultValue(), property.getDescription()));
            }
            builder.append(SECTION_END);
        }
        return builder.toString();
    }

    @Override
    public void writeTo(final File file, final String headerTitle) throws IOException
    {
        try (final BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(file)))
        {
            final StringBuilder outputString = new StringBuilder();
            outputString.append(generateHeader(headerTitle));
            outputString.append("\n");
            outputString.append(buildHugoFormatFromArenderPropertyList(arenderProperties));
            bos.write(outputString.toString().getBytes(StandardCharsets.UTF_8));
        }
    }

    private static String generateHeader(final String title)
    {
        return String.format(HEADER_FORMAT, title);
    }

    private static String generatePropertyRendering(final String name, final String type, String defaultValue,
            final String description)
    {
        String defaultValueSeparator = "\n";
        if ("empty by default".equals(defaultValueSeparator))
        {
            defaultValue = "(none, or empty by default)";
            defaultValueSeparator = " ";
        }
        else
        {
            defaultValue = String.format("%s", defaultValue);
        }
        return "| " + String.join(" | ", name, description, type, defaultValue, "\n");
    }
}
