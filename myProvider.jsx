import React from 'react'
import Context from './myContext'
export class Provider extends React.Component{
    render(){
        const store = this.props.store
        return (
            <Context.Provider value={store}>
                {this.props.children}
            </Context.Provider>
        )
    }
}


