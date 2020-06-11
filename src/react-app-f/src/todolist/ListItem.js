/*
 * @Description:
 * @Version: 2.0
 * @Autor: Alex
 * @Date: 2020-05-29 08:51:29
 * @LastEditors: Alex
 * @LastEditTime: 2020-06-04 15:17:50
 */
import React, { Component } from "react"
import PropTypes from 'prop-types'
class ListItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
	render() {
        return (
            <li
            onClick={this.handleClick}
            title={this.props.test}
            dangerouslySetInnerHTML={this.props.content}
            ></li>
        )
	}
	handleClick() {
        let index = this.props.index
        this.props.handleItemDel(index)
    }
}
ListItem.propTypes = {
    test:PropTypes.string.isRequired,
    content:PropTypes.object.isRequired,
    index:PropTypes.number,
    handleItemDel:PropTypes.func
}
ListItem.defaultProps = {
    test: ' hello react '
}
export default ListItem
