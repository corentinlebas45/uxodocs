package com.arondor.arender.tooling.outputformatter;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

import com.arondor.arender.tooling.ARenderProperty;
import com.arondor.arender.tooling.ARenderPropertyStructuredList;
import com.google.common.base.Strings;

public class RSTOutputFormatter extends AbstractOutputFormatter
{

    private static final char SUB_HEADER_PARAGRAPH_TYPE = ' ';

    private static final String END_OF_SECTION = "\n\n\n";

    private static final char MAIN_HEADER_PARAGRAPH_TYPE = '^';

    private static final String MAIN_HEADER_STYLE = "*";

    private static final String SUB_HEADER_STYLE = "**";

    public RSTOutputFormatter(ARenderPropertyStructuredList arenderProperties)
    {
        super(arenderProperties);
    }

    @Override
    public void writeTo(File file, String headerTitle) throws IOException
    {
        try (BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(file)))
        {
            StringBuilder outputString = new StringBuilder();
            outputString.append(headerTitle).append("\n");
            for (int i = 0; i < headerTitle.length(); i++)
            {
                outputString.append('=');
            }
            outputString.append(END_OF_SECTION);

            drawHeaderLine(outputString);
            // implement header as a standard line

            drawHeaderLine(outputString);

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
            drawHeaderLine(outputString);
            bos.write(outputString.toString().getBytes(StandardCharsets.UTF_8));
        }
    }

    private static void drawHeaderLine(StringBuilder outputString)
    {
        outputString.append(END_OF_SECTION);
    }

    private static String pad(String string, int desiredLength, char padding) throws IOException
    {
        int length = string.length();
        if (length == desiredLength)
        {
            return string;
        }
        if (length < desiredLength)
        {
            for (int i = length; i < desiredLength; i++)
            {
                string = string + padding;
            }
            return string;
        }
        throw new IOException("Desired padding is smaller than actual string. Desired : " + desiredLength
                + " actual length : " + length + ", faulty string: " + string);
    }

    private void writeLine(StringBuilder buffer, String property, String type, String defaultValue, String description)
            throws IOException
    {
        writePropertyHeader(buffer, property, MAIN_HEADER_PARAGRAPH_TYPE, MAIN_HEADER_STYLE);

        writePropertyHeader(buffer, ARenderPropertyStructuredList.TYPE + " :", SUB_HEADER_PARAGRAPH_TYPE,
                SUB_HEADER_STYLE);

        buffer.append(pad(type, arenderProperties.getBiggestType(), ' ')).append(END_OF_SECTION);

        writePropertyHeader(buffer, ARenderPropertyStructuredList.DESCRIPTION + " :", SUB_HEADER_PARAGRAPH_TYPE,
                SUB_HEADER_STYLE);

        buffer.append(pad(description, arenderProperties.getBiggestDescription(), ' ')).append(END_OF_SECTION);

        writePropertyHeader(buffer, ARenderPropertyStructuredList.DEFAULT_VALUE + " :", SUB_HEADER_PARAGRAPH_TYPE,
                SUB_HEADER_STYLE);

        buffer.append(".. code-block :: bash\n\n\t")
                .append(pad(defaultValue, arenderProperties.getBiggestDefaultValue(), ' ')).append(END_OF_SECTION);
    }

    private static void writePropertyHeader(StringBuilder buffer, String header, char pad, String headerStyle)
    {
        StringBuilder definitiveHeader = new StringBuilder();
        definitiveHeader.append(headerStyle).append(header);
        for (int i = headerStyle.length() - 1; i >= 0; i--)
        {
            definitiveHeader.append(headerStyle.charAt(i));
        }
        header = definitiveHeader.toString();
        buffer.append(header).append("\n");

        for (int i = 0; i < header.length(); i++)
        {
            buffer.append(pad);
        }
        buffer.append("\n");
    }

}
