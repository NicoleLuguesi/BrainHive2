import React, { Component } from 'react';

class PostForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             resourceAuthor: '',
             jobSkillLevel: '',
             cohort: ''

        }
    }
    
    handleChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleSubmit = e => {
        alert(`${this.state.username} ${this.state.resourceAuthor} ${this.state.jobSkillLevel} ${this.state.cohort}`)
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="PosterName">Your Name:</label>
                <input type="text" value={this.state.username} onChange={this.handleChange} id="posterName" placeholder="Your Name"></input>

                <label htmlFor="resourceAuthor">Author:</label>
                <input type="text" value={this.state.resourceAuthor} onChange={this.handleChange} id="resourceAuthor" placeholder="Author"></input>

                <label htmlFor="jobSkillLevel">Job Skill Level:</label>
                <input type="text" value={this.state.jobSkillLevel} onChange={this.handleChange} id="jobSkillLevel" placeholder="Job Skill Level"></input>

                <label htmlFor="cohort">Cohort:</label>
                <input type="text" value={this.state.cohort} onChange={this.handleChange} id="cohort" placeholder="cohort"></input>

              </div>

              <button type="submit">Submit</button>
            
            </form>
        
    )
 }
}

export default PostForm;