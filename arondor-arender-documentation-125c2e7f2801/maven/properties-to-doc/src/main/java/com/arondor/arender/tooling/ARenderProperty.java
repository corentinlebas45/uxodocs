package com.arondor.arender.tooling;

import java.util.Locale;

import com.google.common.base.Strings;

public class ARenderProperty
{
    private static final int COLOR_HEX_VALUE_LENGTH = 7;

    private String type;

    private String name;

    private String description;

    private String defaultValue;

    public ARenderProperty(String propertyName, String propertyValue, String description)
    {
        name = propertyName;
        this.description = firstLetterToUpperCase(description);
        buildUpTyping(propertyValue);
        this.defaultValue = propertyValue;
    }

    private static String firstLetterToUpperCase(String unformatted)
    {
        return unformatted.substring(0, 1).toUpperCase(Locale.getDefault()) + unformatted.substring(1);
    }

    private void buildUpTyping(String propertyValue)
    {
        propertyValue = propertyValue.trim();
        // check if boolean
        if (isBoolean(propertyValue))
        {
            type = "boolean";
            return;
        }
        if (isInteger(propertyValue))
        {
            type = "integer";
            return;
        }
        if (isFloat(propertyValue))
        {
            type = "float";
            return;
        }
        if (isColorHex(propertyValue))
        {
            type = "Color, in format #RRGGBB";
            return;
        }
        if (isColorRGB(propertyValue))
        {
            type = "Color, in format rgb(r,g,b)";
            return;
        }
        type = "String";
    }

    private static boolean isColorHex(String propertyValue)
    {
        return (!Strings.isNullOrEmpty(propertyValue) && propertyValue.startsWith("#")
                && propertyValue.trim().length() == COLOR_HEX_VALUE_LENGTH);
    }

    private static boolean isColorRGB(String propertyValue)
    {
        return (!Strings.isNullOrEmpty(propertyValue)
            && propertyValue.toLowerCase(Locale.getDefault()).startsWith("rgb("));
    }

    private static boolean isInteger(String propertyValue)
    {
        try
        {
            Integer.parseInt(propertyValue);
            return true;
        }
        catch (NumberFormatException e)
        {
            return false;
        }
    }

    private static boolean isFloat(String propertyValue)
    {
        try
        {
            Float.parseFloat(propertyValue);
            return true;
        }
        catch (NumberFormatException e)
        {
            return false;
        }
    }

    public boolean isBoolean(String propertyValue)
    {
        return !Strings.isNullOrEmpty(propertyValue)
                && ("true".equals(propertyValue.trim()) || "false".equals(propertyValue.trim()));
    }

    public String getType()
    {
        return type;
    }

    public String getName()
    {
        return name;
    }

    public String getDescription()
    {
        return description;
    }

    public String getDefaultValue()
    {
        return defaultValue;
    }
}
