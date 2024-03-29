import React, { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';
 
function App() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Nike T-Shirt',
      price: 499,
      image:
        'https://tse1.mm.bing.net/th?id=OIP.6w5SA3F4dXdSAiImxe2q7wHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 2,
      name: 'Polo T-Shirt',
      price: 699,
      image:
        'https://tse4.mm.bing.net/th?id=OIP.LIFzGAMseLmMC1xuNbKgOAHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 3,
      name: 'Lewis T-Shirt',
      price: 799,
      image:
        'https://tse3.explicit.bing.net/th?id=OIP.tSXnYifOulMsjUpDkaY0ygHaJh&pid=Api&P=0&h=180',
    },
    {
      id: 4,
      name: 'Denim t-shirt',
      price: 1299,
      image:
        'https://sp.yimg.com/ib/th?id=OPA.Yvx7aNLzRNrSDg474C474&o=5&pid=21.1&w=174&h=174',
    },
    
    
  ]);
    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
 
    const addCourseToCartFunction = (GFGcourse) => {
        const alreadyCourses = cartCourses
                               .find(item => item.product.id === GFGcourse.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === GFGcourse.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
        }
    };
 
    const deleteCourseFromCartFunction = (GFGCourse) => {
        const updatedCart = cartCourses
                            .filter(item => item.product.id !== GFGCourse.id);
        setCartCourses(updatedCart);
    };
 
    const totalAmountCalculationFunction = () => {
        return cartCourses
               .reduce((total, item) => 
                           total + item.product.price * item.quantity, 0);
    };
 
    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };
 
    const filterCourseFunction = courses.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );
 
    return (
        <div className="App">
            <SearchComponent searchCourse={searchCourse} 
                             courseSearchUserFunction=
                                 {courseSearchUserFunction} />
            <main className="App-main">
                <ShowCourseComponent
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
 
                <UserCartComponent
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                    }
                    setCartCourses={setCartCourses}
                />
            </main>
        </div>
    );
}
 
export default App;






