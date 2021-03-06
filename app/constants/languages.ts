import { Language } from '~/types/language'

const languages: Language[] = [
  {
    innerName: 'cpp17_gcc:10.2.0',
    name: 'C++17 (g++ 10.2.0)',
    mime: 'text/x-c++src',
    compilationCommand: 'g++-10 ./Main.cpp -O2 -lm -std=gnu++17 -o ./Main.out',
    runCommand: './Main.out'
  },
  {
    innerName: 'cpp17-acl_gcc:10.2.0',
    name: 'C++17 ACL (g++ 10.2.0 with AC Library v1.1)',
    mime: 'text/x-c++src',
    compilationCommand:
      'g++-10 ./Main.cpp -O2 -lm -std=gnu++17 -I/ -o ./Main.out',
    runCommand: './Main.out',
    libraries:
      '<a href="https://github.com/atcoder/ac-library/releases/tag/v1.1" target="_blank">AtCoder Library v1.1</a>'
  },
  {
    innerName: 'cpp20_gcc:10.2.0',
    name: 'C++20 (g++ 10.2.0)',
    mime: 'text/x-c++src',
    compilationCommand: 'g++-10 ./Main.cpp -O2 -lm -std=gnu++2a -o ./Main.out',
    runCommand: './Main.out'
  },
  {
    innerName: 'c17_gcc:10.2.0',
    name: 'C17 (gcc 10.2.0)',
    mime: 'text/x-csrc',
    compilationCommand: 'gcc-10 ./Main.c -O2 -lm -std=gnu17 -o ./Main.out',
    runCommand: './Main.out'
  },
  {
    innerName: 'java:11.0.9',
    name: 'Java11 (11.0.9)',
    mime: 'text/x-java',
    compilationCommand: 'javac -encoding UTF-8 ./Main.java',
    runCommand: 'java Main'
  },
  {
    innerName: 'python:3.9.0',
    name: 'Python (3.9.0)',
    mime: 'text/x-python',
    compilationCommand: 'python3.9 -m py_compile ./Main.py',
    runCommand: 'python3.9 ./Main.py'
  },
  {
    innerName: 'pypy3:7.3.3',
    name: 'PyPy3 (7.3.3)',
    mime: 'text/x-python',
    compilationCommand: 'pypy3 -m py_compile ./Main.py',
    runCommand: 'pypy3 ./Main.py'
  },
  {
    innerName: 'cs_dotnet:5.0',
    name: 'C# (.NET 5.0)',
    mime: 'text/x-csharp',
    compilationCommand:
      'export DOTNET_SKIP_FIRST_TIME_EXPERIENCE=1 && cd ./Main &&  dotnet new console && mv ./Main.cs ./Main/Program.cs && dotnet publish -c Release --nologo -v q -o .',
    runCommand: 'dotnet ./Main/Main.dll'
  },
  {
    innerName: 'cs_mono:6.12.0.90',
    name: 'C# Mono (6.12.0)',
    mime: 'text/x-csharp',
    compilationCommand: 'mcs ./Main.cs -out:./Main.exe',
    runCommand: 'mono ./Main.exe'
  },
  {
    innerName: 'rust:1.48.0',
    name: 'Rust (1.48.0)',
    mime: 'text/x-rustsrc',
    compilationCommand:
      'cd ./rust_workspace && mv ./Main.rs ./rust_workspace/src/main.rs && cargo build --release',
    runCommand: './rust_workspace/target/release/Rust',
    libraries:
      '<a href="https://raw.githubusercontent.com/cafecoder-dev/language-update/20.10/Rust/Cargo.toml" target="_blank">Cargo.toml</a> を参照'
  },
  {
    innerName: 'ruby:2.7.2',
    name: 'Ruby (2.7.2)',
    mime: 'text/x-ruby',
    compilationCommand: 'ruby -w -c ./Main.rb',
    runCommand: 'ruby ./Main.rb'
  },
  {
    innerName: 'kotlin:1.4.10',
    name: 'Kotlin (1.4.10)',
    mime: 'text/x-kotlin',
    compilationCommand: 'kotlinc ./Main.kt -include-runtime -d Main.jar',
    runCommand: 'kotlin ./Main.jar'
  },
  {
    innerName: 'go:1.15.5',
    name: 'Go (1.15)',
    mime: 'text/x-go',
    compilationCommand:
      'mv ./Main.go ./Main && cd ./Main && go build -o Main.out Main.go',
    runCommand: './Main/Main.out'
  },
  {
    innerName: 'nim:1.4.0',
    name: 'Nim (1.4.0)',
    mime: 'text/plain',
    compilationCommand:
      'nim cpp -d:release --opt:speed --multimethods:on -o:./Main.out ./Main.nim',
    runCommand: './Main.out'
  },
  {
    innerName: 'fortran:10.2.0',
    name: 'Fortran (GNU Fortran 10.2.0)',
    mime: 'text/x-fortran',
    compilationCommand: 'gfortran-10 -O2 ./Main.f90 -o ./Main.out',
    runCommand: './Main.out'
  },
  {
    innerName: 'crystal:0.35.1',
    name: 'Crystal (0.35.1)',
    mime: 'text/x-crystal',
    compilationCommand: 'crystal build ./Main.cr -o ./Main.out',
    runCommand: './Main.out'
  },
  {
    innerName: 'text_cat:8.30',
    name: 'Text (cat)',
    mime: 'text/plain',
    compilationCommand: ':',
    runCommand: 'cat ./Main.txt > ./userStdout.txt'
  },
  {
    innerName: 'perl:5.30.0',
    name: 'Perl (5.30.0)',
    mime: 'text/x-perl',
    compilationCommand: 'perl -c ./Main.pl',
    runCommand: 'perl ./Main.pl'
  },
  {
    innerName: 'raku:2020.10',
    name: 'Raku (2020.10)',
    mime: 'text/plain',
    compilationCommand: 'perl6 -c ./Main.p6',
    runCommand: 'perl6 ./Main.p6'
  },
  {
    innerName: 'bash:5.0.17',
    name: 'Bash (5.0.17)',
    mime: 'text/x-sh',
    compilationCommand: 'bash -n ./Main.sh',
    runCommand: 'bash ./Main.sh'
  },
  {
    innerName: 'cpp17_gcc10',
    name: 'C++17 (g++ 10.0.1)',
    mime: 'text/x-c++src',
    isOutdated: true
  },
  {
    innerName: 'cpp20_gcc10',
    name: 'C++20 (g++ 10.0.1)',
    mime: 'text/x-c++src',
    isOutdated: true
  },
  {
    innerName: 'c17_gcc10',
    name: 'C17 (gcc 10.0.1)',
    mime: 'text/x-csrc',
    isOutdated: true
  },
  {
    innerName: 'python38',
    name: 'Python3 (3.8.2)',
    mime: 'text/x-python',
    isOutdated: true
  },
  {
    innerName: 'cs_dotnet31',
    name: 'C# (.NET Core 3.1)',
    mime: 'text/x-csharp',
    isOutdated: true
  },
  {
    innerName: 'cs_mono6',
    name: 'C# Mono (6.10.0)',
    mime: 'text/x-csharp',
    isOutdated: true
  },
  {
    innerName: 'java11',
    name: 'Java11 (11.0.6)',
    mime: 'text/x-java',
    isOutdated: true
  },
  {
    innerName: 'go_115',
    name: 'Go (1.15)',
    mime: 'text/x-go',
    isOutdated: true
  },
  {
    innerName: 'cpp17_gcc10_acl',
    name: 'C++17 (g++ 10.0.1 with AC Library v1.1)',
    mime: 'text/x-c++src',
    isOutdated: true
  },
  {
    innerName: 'go_114',
    name: 'Go (1.14)',
    mime: 'text/x-go',
    isOutdated: true
  },
  {
    innerName: 'cpp17_gcc7',
    name: 'C++17 (g++ 7.4.0)',
    mime: 'text/x-c++src',
    isOutdated: true
  },
  {
    innerName: 'c11_gcc7',
    name: 'C11 (gcc 7.4.0)',
    mime: 'text/x-csrc',
    isOutdated: true
  },
  {
    innerName: 'python36',
    name: 'Python3 (3.6.9)',
    mime: 'text/x-python',
    isOutdated: true
  },
  {
    innerName: 'cs_mono6',
    name: 'C# (Mono 6.8.0)',
    mime: 'text/x-csharp',
    isOutdated: true
  }
]

export default languages
