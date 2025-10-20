package com.arondor.arender.tooling.outputformatter;

import java.io.File;
import java.io.IOException;

import com.arondor.arender.tooling.ARenderPropertyStructuredList;

public abstract class AbstractOutputFormatter
{

    protected ARenderPropertyStructuredList arenderProperties;

    protected AbstractOutputFormatter(ARenderPropertyStructuredList arenderProperties)
    {
        this.arenderProperties = arenderProperties;
    }

    public abstract void writeTo(File file, String headerTitle) throws IOException;
}
