// 특정한 라이브러리를 불러오기위해. react component 라이브러리를 사용하기 위해
import React from 'react';

// Customer class를 정의
class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
                <CustomerInfo birthday={thigds.props.birthday} gender={this.props.gender} job={this.props.job} />
            </div>


        )
    }

}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>

            </div>
        )
    }

}

class CustomerInfo extends React.Component {
    // 항상 수행 된다. 실제로 그려지는 내용이 render함수에 정의 된다. return  필요
    render() {
        return (
            <div>
                {/* 전달받은 값 출력할 수 있게 만듦 */}

                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>

            </div>
        )
    }
}


// 다른 component에서 우리가 만들고 있는 Customer component를 사용하기 위해 내보낸다
export default Customer;