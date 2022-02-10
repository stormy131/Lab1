# Lab1 a.k.a. Quadratic Equation Solver (QES)

This is a simple JS script for Node.js, which lets you solve quadratic equations. Just follow the instructions 
below to run QES and you will get roots of your equation ASAP.
Terminal commands to install Node.js and download this project:

    sudo apt-get install nodejs
    sudo apt-get install npm
    git clone https://github.com/stormy131/Lab1.git
    cd Lab1
    npm i

Go to the directory of QES project and now you can use it. There are two modes of the script: interactive and file mode.
To start QES in interactive mode, run command:
    
    node solver.js

Then you need to type arguments (A,B,C) of quadratic equation. General form of equation:

    A*x^2 + B*x + C = 0

After that QES will output the result - number of roots and roots themselves.

If you want to run QES in file mode, you need to create a file (.txt or without extension) and write down arguments in it.
After file has been created, start the script and as an argument pass the path to that file relatively to the Lab1 folder:

    node solver.js arguments.txt

File must have specific format, if you expect the script to work correctly. The arguments must be separated with space 
and after C there must be a newline. The needed format is:

    Begining of the file:
    A B C

    End