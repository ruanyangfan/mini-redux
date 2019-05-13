import React from 'react'

class NewComp extends React.Component{
    constructor(){
        super()
        this.state = {
            props: {}
        }
        this.update = this.update.bind(this)
    }
    update(){
        const {data,...ownProps} = this.props
        const {state,mapState,mapDispatch} = data
        this.setState({
            props: {
            ...mapState(state.getState(),ownProps),
            ...mapDispatch(state.dispatch,ownProps)
            }
        })
    }
    componentDidMount(){
        const {data} = this.props
        const {state} = data
        this.update()
        state.subscribe(this.update)
    }
    render(){
        const Comp = this.props.comp     
        return (
            <Comp {...this.state.props}></Comp>
        )
    }
}
export default NewComp