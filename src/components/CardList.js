import React,{Component} from 'react';
import Card from './Card';

class CardList extends Component{
    render(){
        const table=this.props.robots.map(user =><Card key={user.id} id={user.id} name={user.name} email={user.email}/>);
        return table;
    }
}

export default CardList;