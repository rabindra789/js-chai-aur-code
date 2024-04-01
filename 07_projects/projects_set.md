# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("Rabindra")
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) =>{
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'grey'){
          body.style.backgroundColor = e.target.id
        } 
        if(e.target.id === 'white'){
          body.style.backgroundColor = e.target.id
        } 
        if(e.target.id === 'blue'){
          body.style.backgroundColor = e.target.id
        } 
        if(e.target.id === 'yellow'){
          body.style.backgroundColor = e.target.id
        } 
    })
})


```

## project 2 solution

```javascript



```

## project 3 solution code

```javascript


```

## project 4 solution


```javascript


```

