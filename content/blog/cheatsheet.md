---
title: "Cheatsheet"
author: "John Doe"
date: "Aug 14, 2023"
description: "Example of md to test formating"
---
# heading 1
## heading 2
### heading 3
#### heading 4
##### heading 5

<!-- Italics -->
*this text is italics*

_italic_

<!-- Bold -->
**bold**

<!-- Strike Through -->
~~strike~~

<!-- Horizontal Line -->

--- 
___

## Block quote

<!-- Block quote -->
> this is a block

## Links
<!-- links -->
[This is a link](/blog/never#realy-dont-do-it)

[This is a link with tooltip](/blog/never#realy-dont-do-it "tooltip")

## Lists

<!-- Unordered List -->
* item1
    * item2

<!--Ordered List -->

1. first item
2. second item

## Inline code block
<!-- inline code block -->
`no css`

## Images
<!--Images-->

![Hollow Knight](/img/hollo.jpg)


<!-- github md -->

## Code Blocks
### Bash code block

<!-- Bash script block -->

```bash
npm install 
```
### JS code block

<!-- JS Block -->

```javascript
function add(num1, num2){

}
```
### C# code block

```c#
public static class Program
{

}
```

## Task list
<!-- task list -->
* [x] done
* [ ] not done

## Tables
<!-- tables -->
<!-- Note that :---: means center aligned -->
<!-- Note that ---: means right aligned -->
<!-- Note that :--- means left aligned -->

| Column 1 | Column 2 | Column 3 |
| :---: | :--- | ---: |
| Row 1, Column 1 | Row 1, Column 2 | Row 1, Column 3 |
| Row 2, Column 1 | Row 2, Column 2 | Row 2, Column 3 |
| Row 3, Column 1 | Row 3, Column 2 | Row 3, Column 3 |

## Diff
<!-- Diff -->
```diff
- This line is removed.
+ This line is added.
```


## Nesting quotes

> One.

>> One.

>>> One

>>>> One.

>>>>> One.

## Collapsible content

   <details>
    <summary>Click to see more!</summary>
    
    ## More awesome tips!

    - item 1 
    - item 2
   </details>