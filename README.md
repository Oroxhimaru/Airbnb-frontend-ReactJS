# Airbnb Front Page

![image](https://github.com/Oroxhimaru/Airbnb-frontend-ReactJS/assets/110180871/376e2c46-cc44-43c3-9303-ba6e68fc7027)

## PROBLEMS / SOLUTIONS
 1. The first problem I faced was the array were not exporting in main file. "export default const Data = []" this doesn't work and the reason is you need to store array data in variables coz of VS code but you can't export a const/variable into another file. So the solution is you need to store the array first like const Data = [...] AND IN LAST export default Data;

2. I always import the image form local directory, that work for me for attaching the image like this import Star from "../images/Star.png";, but when I was trying that on props that doesn't work, which is obvious you need to give your local directory link to the array data e.g: "coverImg: "katie.png"" and then you need to write this on your image attributes src "../images/${props.item.coverImg}" but that doesn't work. The image was not showing up plus I got the solution from scrimba website they were saying to transfer the images to the public folder but that doesn't work for me. So the solution which work for me is that you need to write your dirctory address with props like this <img src={require(`../images/${props.item.coverImg}`)} alt="katie" className="card--image" /> This 'require' will make your image shows up frrom props.
3.  Height issue all the images sign were not equal even though I was follwoing the the tutorial of scrimba you can solve that problem by just handling the css of height of image by yourself.

 


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

