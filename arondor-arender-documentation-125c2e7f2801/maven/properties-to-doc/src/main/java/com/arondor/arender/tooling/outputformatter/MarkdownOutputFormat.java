package com.arondor.arender.tooling.outputformatter;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

import com.arondor.arender.tooling.ARenderProperty;
import com.arondor.arender.tooling.ARenderPropertyStructuredList;
import com.google.common.base.Strings;

public class MarkdownOutputFormat extends AbstractOutputFormatter
{

    private static final String LINE = "\n---\n";

    private static final String HEADER1 = "# ";

    private static final String HEADER2 = "## ";

    private static final String KEY = "**";

    private static final String START_CODE_FIELD = "```cfg\n";

    private static final String END_CODE_FIELD = "```\n";

    public MarkdownOutputFormat(ARenderPropertyStructuredList arenderProperties)
    {
        super(arenderProperties);
    }

    @Override
    public void writeTo(File file, String headerTitle) throws IOException
    {
        try (BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(file)))
        {
            StringBuilder outputString = new StringBuilder();
            outputString.append(HEADER1).append(headerTitle).append("\n");
            outputString.append("\n\n\n");
            for (ARenderProperty property : arenderProperties)
            {
                String defaultValue = property.getDefaultValue();
                if (Strings.isNullOrEmpty(defaultValue.trim()))
                {
                    defaultValue = "(none, empty by default)";
                }
                writeLine(outputString, property.getName(), property.getType(),
                    defaultValue, property.getDescription());
            }
            bos.write(outputString.toString().getBytes(StandardCharsets.UTF_8));
        }
    }

    private static void writeLine(StringBuilder outputString, String name, String type, String defaultValue,
                            String description)
    {
        outputString.append(HEADER2).append(name).append("\n");
        outputString.append(KEY).append(ARenderPropertyStructuredList.TYPE).append(KEY).append("\n").append("\n")
                .append(type).append("\n").append("\n");
        outputString.append(KEY).append(ARenderPropertyStructuredList.DESCRIPTION).append(KEY).append("\n").append("\n")
                .append(description).append("\n").append("\n");
        outputString.append(KEY).append(ARenderPropertyStructuredList.DEFAULT_VALUE).append(KEY).append("\n")
                .append("\n").append(START_CODE_FIELD).append(defaultValue).append("\n").append(END_CODE_FIELD)
                .append("\n");
        outputString.append(LINE);

    }

}
