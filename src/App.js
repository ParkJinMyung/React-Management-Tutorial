import React from 'react';
import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '박진명',
  'birthday': '921106',
  'gender': '남자',
  'job': '셀디오'
},{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '닌자',
  'birthday': '201106',
  'gender': '중성',
  'job': '요리사'
},{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '뚱재',
  'birthday': '961106',
  'gender': '남자',
  'job': '먹방유튜버'
}]
// app component에서 customer을 불러옴
function App() {
  return (
    <div>
      {
        /* 반복되는 소스코드를 줄이기 위해 map함수 사용. 한명의 고객을 c라고 칭함 
        map을 사용하기 위해서 밑에 각 원소를 구분할 수 있는 key 라는 속성을 반드시 넣어줘야한다*/
        customers.map(c => {
          return(
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job} 
            />
          );
        })
      }
    
    </div>
  );
}

export default App;
