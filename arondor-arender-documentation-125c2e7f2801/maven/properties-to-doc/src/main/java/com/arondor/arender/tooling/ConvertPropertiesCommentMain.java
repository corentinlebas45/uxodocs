package com.arondor.arender.tooling;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import com.arondor.arender.tooling.outputformatter.AbstractOutputFormatter;
import com.arondor.arender.tooling.outputformatter.HugoDocOutputFormatter;
import com.arondor.arender.tooling.outputformatter.MarkdownOutputFormat;
import com.arondor.arender.tooling.outputformatter.RSTOutputFormatter;

import org.apache.commons.cli.*;
import org.apache.log4j.Logger;

public class ConvertPropertiesCommentMain
{
    private static final Logger LOGGER = Logger.getLogger(ConvertPropertiesCommentMain.class);

    private static final String INPUT_FILE = "i";

    private static final String OUTPUT_FR = "fr";

    private static final String OUTPUT_EN = "en";

    private static final String OUTPUT_FORMAT = "f";

    private static AbstractOutputFormatter getFormatter(
        String outputFormat, ARenderPropertyStructuredList arenderProperties) throws IllegalArgumentException
    {
        AbstractOutputFormatter oFormatter = null;
        switch (SupportedFormat.valueOf(outputFormat.toUpperCase(Locale.getDefault())))
        {
        case RST:
            oFormatter = new RSTOutputFormatter(arenderProperties);
            break;
        case MARKDOWN:
            oFormatter = new MarkdownOutputFormat(arenderProperties);
            break;
        case HUGO:
            oFormatter = new HugoDocOutputFormatter(arenderProperties);
            break;
        }
        return oFormatter;
    }

    public static void main(String[] args)
    {
        // first parameter => the path for commented properties file
        Options options = new Options();
        Option build = Option.builder(INPUT_FILE).hasArg().desc("path to the input properties files").build();
        build.setRequired(true);
        options.addOption(build);

        // second parameter => the file into which the documentation shall be
        // written
        build = Option.builder(OUTPUT_EN).hasArg().desc("path to the output english document file").build();
        build.setRequired(false);
        options.addOption(build);

        // third parameter (optional) => the french version for the
        // documentation path
        build = Option.builder(OUTPUT_FR).hasArg().desc("path (optional) to the output french document file").build();
        build.setRequired(false);
        options.addOption(build);

         // fourth parameter => the output format (one of SupportedFormat)
        build = Option.builder(OUTPUT_FORMAT).hasArg().desc("format of the output document file").build();
        build.setRequired(true);
        options.addOption(build);

        CommandLineParser parser = new DefaultParser();
        try
        {
            CommandLine cmd = parser.parse(options, args);

            String inputPath = cmd.getOptionValue(INPUT_FILE);
            File inputFile =  new File(inputPath);

            String outputFormat =  cmd.getOptionValue(OUTPUT_FORMAT);
            ARenderPropertyStructuredList arenderProperties = PropertiesDocumentation
                .getARenderPropertyStructuredList(inputFile);

            AbstractOutputFormatter outputFormatter = getFormatter(outputFormat, arenderProperties);
            if (outputFormatter != null)
            {
                if (cmd.hasOption(OUTPUT_EN))
                {
                    outputFormatter.writeTo(new File(cmd.getOptionValue(OUTPUT_EN)),
                            "Complete arender front end configuration properties list");
                }
                if (cmd.hasOption(OUTPUT_FR))
                {
                    outputFormatter.writeTo(new File(cmd.getOptionValue(OUTPUT_FR)),
                            "Documentation complète des propriétés du serveur web ARender (en Anglais)");
                }
            }
        }
        catch (ParseException e)
        {
            HelpFormatter formatter = new HelpFormatter();
            formatter.printHelp("java -jar arender-properties-documentation-converter-${version}.jar", options);
            System.exit(1);
        }
        catch (IOException e)
        {
            LOGGER.error("Error with the input file", e);
            System.exit(1);
        }
        catch (IllegalArgumentException e)
        {
            LOGGER.error(e);
            System.exit(1);
        }
    }
}
