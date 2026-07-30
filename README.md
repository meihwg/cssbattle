# CSSBattle Solutions

This repository contains my personal solutions for [CSSBattle](https://cssbattle.dev/), a game where you recreate visual targets using HTML and CSS with the shortest code possible.

## What is CSSBattle?

[CSSBattle](https://cssbattle.dev/) is a code golf challenge focused on CSS. Each level gives you a target image, and the goal is to reproduce it as closely as possible with minimal HTML/CSS.

## Plugins

The repository also contains the plugins I made and use.
- minifier - minifies the code by :
    - deleting non essential caracters
    - replacing some words to shorter ones ("transparent" > "#0000")
    - replacing units to the shortest one for that value (20px > 5vw)
- unmifier - add indentation to make the code more readable