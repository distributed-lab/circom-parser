#!/bin/sh

# Set the ANTLR4 environment variable to the location of the ANTLR JAR
alias antlr4='java -Xmx1500M -cp "parser/antlr-4.13.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool'

cp circom-g4-grammar/**/*.g4 parser

antlr4 -Dlanguage=TypeScript -visitor -package parser parser/*.g4

rm parser/*.g4

mv parser/*.ts src/generated

rm parser/*Circom*.*