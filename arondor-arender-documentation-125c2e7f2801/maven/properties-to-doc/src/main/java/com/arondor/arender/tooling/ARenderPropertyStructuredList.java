package com.arondor.arender.tooling;

import java.util.ArrayList;

public class ARenderPropertyStructuredList extends ArrayList<ARenderProperty>
{

    /**
     *
     */
    private static final long serialVersionUID = 5008273022540082840L;

    public static final String TYPE = "Type";

    public static final String PROPERTY = "Property";

    public static final String DESCRIPTION = "Description";

    public static final String DEFAULT_VALUE = "Default";

    private static final int TOTAL_COLUMN_LENGTH = 4;

    private int biggestDescription = DESCRIPTION.length();

    private int biggestProperty = PROPERTY.length();

    private int biggestType = TYPE.length();

    private int biggestDefaultValue = DEFAULT_VALUE.length();

    @Override
    public boolean add(ARenderProperty property)
    {
        if (property.getDescription().length() > biggestDescription)
        {
            biggestDescription = property.getDescription().length();
        }
        if (property.getName().length() > biggestProperty)
        {
            biggestProperty = property.getName().length();
        }
        if (property.getType().length() > biggestType)
        {
            biggestType = property.getType().length();
        }
        if (property.getDefaultValue().length() > biggestDefaultValue)
        {
            biggestDefaultValue = property.getDefaultValue().length();
        }
        return super.add(property);
    }

    public int getStructuredTableRSTLength()
    {
        return TOTAL_COLUMN_LENGTH + biggestDescription + biggestProperty + biggestType + biggestDefaultValue;
    }

    public int getBiggestDescription()
    {
        return biggestDescription;
    }

    public int getBiggestProperty()
    {
        return biggestProperty;
    }

    public int getBiggestType()
    {
        return biggestType;
    }

    public int getBiggestDefaultValue()
    {
        return biggestDefaultValue;
    }
}
