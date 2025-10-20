package com.arondor.arender.tooling;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.common.base.Strings;

import org.apache.log4j.Logger;

public class PropertiesDocumentation
{

    private static final Logger LOGGER = Logger.getLogger(PropertiesDocumentation.class);

    public static ARenderPropertyStructuredList getARenderPropertyStructuredList(File inputFile) throws IOException
    {
        ARenderPropertyStructuredList arenderProperties = new ARenderPropertyStructuredList();

        List<String> linesRead = readFully(inputFile);
        for (int i = 0; i < linesRead.size(); i++)
        {
            String currentLine = linesRead.get(i);
            if (!currentLine.startsWith("#") && !Strings.isNullOrEmpty(currentLine))
            {
                if (currentLine.contains("="))
                {
                    // found a property
                    arenderProperties.add(handleProperty(linesRead, i));
                }
                else
                {
                    LOGGER.warn("Found the following line: " + currentLine
                            + "\nIt did not possess any property value, please correct it");
                }
            }
        }
        return arenderProperties;
    }

    private static ARenderProperty handleProperty(List<String> linesRead, int i)
    {
        String property = linesRead.get(i);
        String[] split = property.split("=");
        String propertyValue;
        if (split.length == 1)
        {
            LOGGER.warn("Could not find property value, will place \"empty by default\" as default value");
            propertyValue = "empty by default";
        }
        else
        {
            propertyValue = split[1].trim();
        }
        String propertyName = split[0].trim();

        int curIndex = i - 1;
        String currentLine;
        while (i >= 0)
        {
            currentLine = linesRead.get(curIndex);
            if (currentLine.startsWith("#") && !currentLine.substring(1).startsWith("#", 0))
            {
                // found the documentation
                return new ARenderProperty(propertyName, propertyValue, currentLine.substring(1).trim());
            }
            if (!Strings.isNullOrEmpty(currentLine))
            {
                LOGGER.warn("Please add a documentation for this property: " + propertyName);
                return new ARenderProperty(propertyName, propertyValue, "No description yet provided");
            }
            curIndex--;
        }
        LOGGER.warn("Please add a documentation for this property: " + propertyName);
        return new ARenderProperty(propertyName, propertyValue, "No description yet provided");
    }

    private static List<String> readFully(File inputFile) throws IOException
    {
        List<String> result = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(inputFile)))
        {
            String line;
            while ((line = br.readLine()) != null)
            {
                result.add(line);
            }
        }
        return result;
    }

}
