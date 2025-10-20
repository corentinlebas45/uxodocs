package com.arondor.arender.tooling;

enum SupportedFormat
{
    RST("rst"), MARKDOWN("markdown"), HUGO("hugo");

    private String format;

    SupportedFormat(String format)
    {
        this.format = format;
    }

    @Override
    public String toString()
    {
        return format;
    }

}
