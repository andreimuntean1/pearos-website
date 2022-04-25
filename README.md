# pearOS website

pearOS is a linux distribution that aims for UI and UX, offering a mac like feeling, now even on older PCs. This website shows off more details about this OS and provides a ISO download link. It was made using Next.js, TailwindCSS, GSAP and Framer Motion.

## Run Locally

Clone the project

```bash
  git clone https://github.com/andreimuntean1/pearos-website.git
```

Go to the project directory

```bash
  cd pearos-website
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Screenshots

![Homescreen](https://i.imgur.com/FULmYzy.png)

![Homescreen](https://i.imgur.com/KDpNKtJ.png)

## Documentation

This project has a small, reusable React components library

### Content

* [Wrapper](#wrapper)
* [Header](#header)
* [Footer](#footer)
* [Text](#text)
* [Button](#button)
* [Popup](#popup)
* [Loader](#loader)
* [Logo](#logo)

### Wrapper

A container for all the elements on the page, already styled using Tailwind CSS, responsive and reusable. It contains colored decorative elements for a maximum 16000px tall page.

#### Usage

Import the component

```jsx
import Wrapper from 'components/Wrapper'
```

Wrap all your page in it

```jsx
<Wrapper>
  ...
</Wrapper>
```

### Header

The header of the website. It is responsive and can be custom styled.

#### Usage

It is already imported in the `<Wrapper>`

#### Props


| Name | Type | Description |
| :- | :- | :- |
| `styles` | `string` | TailwindCSS utility classes used for additional styling |

### Footer

The footer of the website. It is responsive and can be custom styled.

#### Usage

It is already imported in the `<Wrapper>`

#### Props


| Name | Type | Description |
| :- | :- | :- |
| `styles` | `string` | TailwindCSS utility classes used for additional styling |

### Text

A component for writing any type of text, either is it a big or small title, or a paragraph. It is already styled, HTML semantic and can be custom styled.

#### Usage

Import the component

```jsx
import Text from 'components/Text'
```

Add the component in your code

```jsx
<Text>Lorem ipsum dolor sit amet</Text>
```

Left with no props, the text will style itself as a default `<p>`. Alternatively you can add the `type` prop to specify the proper HTML element and the according styling, like this

```jsx
<Text type={'title'}>Lorem ipsum dolor sit amet</Text>
```

and therefore, the foregoing component will render to a `<h1>` with proper styling.

Further Tailwind styling can be added using the `styles` prop by specifying the fitting classes

#### Props


| Name | Type | Accepted values | Description |
| :- | :- | :- | :- |
| `type` | `string` | `title`, `subtitle`, `small-title`, `paragraph` | The text type, which determins the element it should render and its styling |
| `styles` | `string` | Any valid TailwindCSS utility class | TailwindCSS utility classes used for additional styling |

### Button

A button UI component, pre-styled, featuring multiple variants

#### Usage

Import the component

```jsx
import Button from 'components/Button'
```

Add the component in your code

```jsx
<Button>Press me</Button>
```

Left with no props, the button has the default styling and no click action.

If given the `type` prop, the button can alternate between two states, primary or secondary. The `type` prop can be used like below.

```jsx
<Button type={'primary'}>Press me</Button>
```

If you want the button to do something when clicked, you need to use the `onClick` prop, to assign it either to a named function, either to a callback Javascript function.

```jsx
<Button type={'secondary'} onClick={() => console.log('I am a secondary button')}>Press me</Button>
```

#### Props


| Name | Type | Accepted values | Description |
| :- | :- | :- | :- |
| `type` | `string` | `primary`, `secondary` | The button type, which determins its styling |
| `onClick` | `function` | Any valid Javascript code | This function determins what pressing the button should do |
| `styles` | `string` | Any valid TailwindCSS utility class | TailwindCSS utility classes used for additional styling |

### Popup

This component is a reusable popup with customizable text and button label

#### Usage

Import the component

```jsx
import Popup from 'components/Popup'
```

Add the component in your code, **before** the `<Wrapper>`. You could wrap the whole page in a `div` or a React fragment.

This component does not accept any other JSX elements inside it, so it can be used as a self-closing tag for cleaner code.

The popup requires all its props: `text`, `buttonText`, `openState` and `onPress`

The `text` prop determines the text that the popup should contain.

The `buttonText` prop determines the label that should appear on the button on the popup.

The `openState` and `onPress` are strongly recommended to be the destructured values from React's `useState` hook.

```jsx
<>
  <Popup
    text={'This is a popup'}
    buttonText={'OK'}
    openState={isOpen}
    onPress={() => setIsOpen(false)}   
  />
  <Wrapper>
    ...
  </Wrapper>
</>
```

#### Props


| Name | Type | Accepted values | Description |
| :- | :- | :- | :- |
| `text` | `string` | Not applicable | The popup displayed text |
| `buttonText` | `string` | Not applicable | The popup button label |
| `openState` | `function` | `true`, `false` | Current state, from the`useState` hook |
| `onPress` | `string` | `true`, `false` (function argument) | The function that updates the state from the`useState` hook |

### Loader

A simple loader component that displays while the page is being loaded

#### Usage

Import the component

```jsx
import Loader from 'components/Loader'
```

Add the component conditionally only while the page is loading. Best practice is by using the `useState` hook for loading state management and `useEffect` to remove the loader once the page has rendered.

This component does not accept any other JSX elements inside it, so it can be used as a self-closing tag for cleaner code.

```jsx
const [isLoading, setIsLoading] = useState(true)
useEffect(() => setIsLoading(false), [])

return isLoading ? <Loader /> : (
  ...
)
```

### Logo

pearOS SVG logo turned into a React component. The width and height can be determined manually, but if they are left undefined, the pre-established values are going to be used.

#### Usage

Import the component

```jsx
import Logo from 'components/Logo`
```

This component does not accept any other JSX elements inside it, so it can be used as a self-closing tag for cleaner code.

It takes 2 optional aruments, width and height. Those values should respect the aspect ratio of 15 : 22, or 0.68.

```jsx
<Logo width={24} height={31} />
```

If width isn't specified, the value of `30` will be used, and if the height is not specified, the value of `44` will be used

#### Props


| Name | Type | Accepted values | Description |
| :- | :- | :- | :- |
| `width` | `number` | Any value that respects the 15:22 aspect ratio | The specific logo width |
| `height` | `number` | Any value that respects the 15:22 aspect ratio | The specific logo height |

## License

[Pear Public License](https://github.com/Pear-Project/Pear-Public-License)
