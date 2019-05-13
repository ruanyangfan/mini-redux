import React from 'react'
import Context from './myContext'
import NewComp from './NewComp'

export function connect(mapState,mapDispatch){
    return function(Comp){
        return class extends React.Component{
            render(){
                return (
                    <Context.Consumer>
                        {state => (
                            <NewComp data={{state,mapState,mapDispatch}} comp={Comp} {...this.props}/>
                            )}
                    </Context.Consumer>
                )
            }
        }
    }
}
