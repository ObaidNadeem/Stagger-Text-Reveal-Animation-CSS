# **Stagger Text Reveal Animation React JS**

## THIS PACKAGE CONTAINS TWO COMPONENTS

- ### **StaggerTextReveal**

- ### **StaggerTextChange**

&nbsp;
&nbsp;

![demo](./examples/src/example.gif)

---

&nbsp;

## [Live Demo Link](https://obaidnadeem.github.io/Stagger-Text-Reveal-Animation-CSS/)

## [Find this on npm](https://www.npmjs.com/package/stagger-text-reveal-animation)

## [Find this on Github](https://github.com/ObaidNadeem/STAGGER-TEXT-REVEAL-ANIMATION-CSS)

&nbsp;

---

## **Introduction**

## The stagger text reveal animation package helps you to apply stagger effect to your text. Just pass your text as a prop. The components are fully [customizable](#props) and [responsive](#responsiveness). The package is available on [npm](https://www.npmjs.com/package/stagger-text-reveal-animation)

### This animation is done using css and javascript in React Js so no need of any external libraries like anime.js, Spring etc

&nbsp;

---

## **Installation**

`npm install stagger-text-reveal-animation;`

&nbsp;

---

&nbsp;

# **StaggerTextReveal**

Helps you to achieve text reveal animation.

## **Importing**

```javascript

import StaggerTextReveal from "stagger-text-reveal-animation";

```

&nbsp;

---

## **Usage**

```javascript

import React from 'react';
import StaggerTextReveal from "stagger-text-reveal-animation";

export const Component = () => {

    return (
           
        <div>
            <StaggerTextReveal
               text={"Obaid Nadeem"}
            />
        </div>
                    
    );
}

```

It's easy as that :D

---

&nbsp;

## **Props**

Use these props to customize your text animation.

| Prop                | Type         | Description   | Default Value   |
|:-------------:      | :----------: |:-------------:| :-----:         |
| **text**                | String       |Takes your text as string and animates it.  | TEXT PLACEHOLDER |
| **fontFamily**          | String       |Applies your font family      |   --           |
| **fontWeight**          | String       |Customize font Weight      |    bolder          |
| **fontSize**            | Number       |Pass the font size as number. Calculates value in pixels.       |    48px           |
| **color**               | String       |Obv pass the color of text       |    #282828           |
| **duration**            | Number       |Duration for animation. Reads values as *seconds*.       |    0.7s         |
| **stagger**             | Number       |Animation is based on stagger value. Pass this value to customize the staggering effect.       |    60           |
| **direction**           | String       |Pass "*down*" as string, the text will reveal from top to bottom.       |    up           |
| **reverse**             | Boolean     |Pass **true** to reverse the reveal animaion. Conceals the staggering text.        |    false           |
| **triggerAfter**        | Number    |Gives delay to animation. Your animation will be triggered after respective *seconds* you entered.        |    0           |
| **wordSpacing**         | Number       | Increases or Decreases space between words. Calculates value in pixels.       |    0           |
| **unit**              | string       | This is a very important prop to make component responsive. Pass your value as string in "rem" or "vw" whatever you prefer.       |    px           |
| **width**               | Number       |Controls width of the Sentance. Calculates value in pixels.       | If you don't pass width as a prop, it will be 100vw initially.           |
| **height**              | Number       |Controls height of the Sentance. Calculates value in pixels.       |    48px           |

&nbsp;

---

## **Example**

```javascript
import React from 'react';
import StaggerTextReveal from "stagger-text-reveal-animation";

export const Component = () => {

    return (
           
        <div>
            <StaggerTextReveal
                text={"THE ILLUSION OF"}
                fontFamily={"'Antic Didone', serif"}
                fontWeight={"lighter"}
                fontSize={90}
                duration={0.9}
                stagger={50}
                direction={"down"}
                reverse={true}
                triggerAfter={2000}
                unit = {"rem"}
                wordSpacing={200}
                width={850}
                height={150}
            />
        </div>
                    
    );
}

```

^ all the values are read in *pixels* and *seconds*.

&nbsp;

---

## **Responsiveness**

The component can be made responsive using *vw* or *rem* or any other unit you want to use.

```javascript
    unit={"unit"}
```

Using **vw** will make the componenet shift size according to view port width.

When using **rem** you would have to define rem values for different viewport widths in css. You can search more about how rem works on google.

```css
@media screen and (max-width: 600px) {
  .root {
      font-size: 8px;
    }
}
```

&nbsp;

---

&nbsp;

# **StaggerTextChange**

Helps you to achieve text reveal animation.

## **Importing**

```javascript

import StaggerTextChange from "stagger-text-reveal-animation";

```

&nbsp;

---

## **Usage**

```javascript

import React from 'react';
import StaggerTextChange from "stagger-text-reveal-animation";

export const Component = () => {

    return (
           
        <StaggerTextChange
                        text={"INITIAL TEXT"}
                        changeTo={"CHANGED TEXT"}
                        fontFamily={"'Antic Didone' serif"}
                        fontWeight={"lighter"}
                        fontSize={6}
                        duration={0.9}
                        stagger={10}
                        direction={"down"}
                        unit={"vw"}
                        triggerAfter={500}
                        wordSpacing={200}
                        width={850}
                        height={100}
        />
                    
    );
}

```

&nbsp;

---

## **Props**

Same props as [StaggerTextReveal](#StaggerTextReveal) but
has an additional props of **changeTo**

| Prop                | Type         | Description   | Default Value   |
|:-------------:      | :----------: |:-------------:| :-----:         |
| **changeTo**                | String       |Takes your text as string and animates it.  | CHANGED TEXT |

**reverse** prop dosen't works for this component.

&nbsp;

---

## **Responsiveness**

Same as [StaggerTextReveal](#StaggerTextReveal)

---

## **LICENSE**

[MIT](./LICENSE)  ©  [Obaid Nadeem](https://github.com/ObaidNadeem)
