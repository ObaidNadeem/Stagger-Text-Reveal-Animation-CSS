# **Stagger Text Reveal Animation React JS**

&nbsp;
&nbsp;

![demo](./examples/src/example.gif)

---

&nbsp;

## [Live Demo Link](https://www.npmjs.com/package/staggertextrevealanimation)

## [Find this on npm](https://www.npmjs.com/package/staggertextrevealanimation)

## [Find this on Github](https://github.com/ObaidNadeem/STAGGER-TEXT-REVEAL-ANIMATION-CSS)

&nbsp;

---

## **Introduction**

## The stagger text reveal animation helps you to apply stagger effect to your text. Just pass your text as a prop. The component is fully [customizable](#customize) and available on [npm](https://www.npmjs.com/package/testpackageofobaid)

### This animation is done using css and javascript in React Js so no need of any external libraries like anime.js, Spring etc

&nbsp;

---

## **Installation**

`npm install staggertextrevealanimation;`

&nbsp;

---

## **Importing**

```javascript

import StaggerText from "staggertextrevealanimation";

```

&nbsp;

---

## **Usage**

```javascript

import React from 'react';
import StaggerText from "staggertextrevealanimation";

export const Component = () => {

    return (
           
        <div>
            <StaggerText
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
| **text**                | String       |Takes your text as string and animates it.  | Stagger Text |
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
| **width**               | Number       |Controls width of the Sentance. Calculates value in pixels.       |    Calculated           |
| **height**              | Number       |Controls height of the Sentance. Calculates value in pixels.       |    48px           |

&nbsp;

---

## **Example**

```javascript
import React from 'react';
import StaggerText from "staggertextrevealanimation";

export const Component = () => {

    return (
           
        <div>
            <StaggerText
                text={"THE ILLUSION OF"}
                fontFamily={"'Antic Didone', serif"}
                fontWeight={"lighter"}
                fontSize={90}
                duration={0.9}
                stagger={50}
                direction={"down"}
                reverse={true}
                triggerAfter={2}
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

## **LICENSE**

[MIT](./LICENSE)  ©  [Obaid Nadeem](https://github.com/ObaidNadeem)
