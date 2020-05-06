// import React, { Component } from "react";

// class PostForm extends Component {
//   state = {
//     posterName: "",
//     resourceAuthor: "",
//     jobSkillLevel: "",
//     cohort: "",
//     title: "",
//     categories: "",
//     summary: "",
//     link: "",
//     resourceType: "",
//     datePublished: null,
//     videoLength: "",
//     timeToComplete: "",
//     rating: "",
//     comments: [],
//   };

//   handleChange = (e) => {
//     this.setState({
//       ...this.state,
//       [e.target.id]: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     let postTest = this.state;
//     this.props.addPost(postTest)
//     };

//   render() {
//     return (
//       <div>
//         <form style={myStyles.form} onSubmit={(e) => this.handleSubmit(e)}>
//           {/* <label htmlFor="posterName">Your Name: </label> */}
//           <input
//             type="text"
//             id="posterName"
//             placeholder="Your Name"
//             value={this.state.posterName}
//             onChange={(e) => this.handleChange(e)}
//             required
//           />
//           <input
//             type="text"
//             id="resourceAuthor"
//             placeholder="Author Name"
//             value={this.state.resourceAuthor}
//             onChange={(e) => this.handleChange(e)}
//           />
//           {/* dropdown skill level */}
//           <div>
//             <select
//               id="jobSkillLevel"
//               value={this.state.jobSkillLevel}
//               onChange={(e) => this.handleChange(e)}
//             >
//               <option value="" disabled>
//                 Author skill level
//               </option>
//               <option value="Intro">Intro</option>
//               <option value="Intermediate">Intermediate</option>
//               <option value="Advanced">Advanced</option>
//             </select>
//           </div>
//           <input
//             type="text"
//             id="cohort"
//             placeholder="Cohort #"
//             value={this.state.cohort}
//             onChange={(e) => this.handleChange(e)}
//           />
//           <input
//             type="text"
//             id="title"
//             placeholder="title"
//             value={this.state.title}
//             onChange={(e) => this.handleChange(e)}
//           />
//           <input
//             type="text"
//             id="categories"
//             placeholder="Categories (seperate multiples with commas)"
//             value={this.state.categories}
//             onChange={(e) => this.handleChange(e)}
//           />
//           <input
//             type="text"
//             id="link"
//             placeholder="Resource Link"
//             value={this.state.link}
//             onChange={(e) => this.handleChange(e)}
//           />
//           <input
//             type="text"
//             id="resourceType"
//             placeholder="Resource Type"
//             value={this.state.resourceType}
//             onChange={(e) => this.handleChange(e)}
//           />
//           <input
//             type="date"
//             id="datePublished"
//             placeholder="Published Date"
//             value={this.state.datePublished}
//             onChange={(e) => this.handleChange(e)}
//           />
//           <input
//             type="text"
//             id="videoLength"
//             placeholder="Length of Video (optional)"
//             value={this.state.videoLength}
//             onChange={(e) => this.handleChange(e)}
//           />
//           <input
//             type="text"
//             id="timeToComplete"
//             placeholder="Time to complete resource"
//             value={this.state.timeToComplete}
//             onChange={(e) => this.handleChange(e)}
//           />
//           <input
//             type="number"
//             id="rating"
//             placeholder="1 to 5 rating"
//             value={this.state.rating}
//             onChange={(e) => this.handleChange(e)}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// const myStyles = {
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// };

// export default PostForm;


import React, { Component } from "react"; 

//object we create externally
//this is the initial BLANK state
//this is a static variable - a constant static value
const INITIAL_STATE = {
      id: 0,
      posterName: "",
      resourceAuthor: "",
      jobSkillLevel: "",
      cohort: "",
      title: "",
      categories: "",
      summary: "",
      link: "",
      resourceType: "",
      datePublished: "",
      videoLength: "",
      timeToComplete: "",
      raiting: "",
      comments: []
}

class PostForm extends Component {
    state = { ...INITIAL_STATE}; 

    handleChange = (e) => {
        this.setState({
            ...this.state, 
            [e.target.id]: e.target.value,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault(); 
        const postData = {...this.state}; 
        postData.categories = postData.categories.split(",");
        this.props.addPost(postData); 
        this.setState({ 
          posterName: "",
          resourceAuthor: "",
          jobSkillLevel: "",
          cohort: "",
          title: "",
          categories: "",
          summary: "",
          link: "",
          resourceType: "",
          datePublished: "",
          videoLength: "",
          timeToComplete: "",
          raiting: "",
          comments: []
      });
    };
    
    render() {
        return (
            <div>
        <form 
        style={myStyles.form} 
        onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            id="posterName"
            placeholder="Your Name"
            value={this.state.posterName}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <input
            type="text"
            id="resourceAuthor"
            placeholder="Author Name"
            value={this.state.resourceAuthor}
            onChange={(e) => this.handleChange(e)}
          />
          {/* dropdown skill level */}
          <div>
            <select 
            id="jobSkillLevel"
            value={this.state.jobSkillLevel} 
            onChange={(e) => this.handleChange(e)}
            >
              <option value="" disabled>
                Author Skill Levels
              </option>
              <option value="Intro">Intro</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <input
            type="text"
            id="cohort"
            placeholder="Cohort #"
            value={this.state.cohort}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="title"
            placeholder="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="categories"
            placeholder="Categories (seperate multiples with commas)"
            value={this.state.categories}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="link"
            placeholder="Resource Link"
            value={this.state.link}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="resourceType"
            placeholder="Resource Type"
            value={this.state.resourceType}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="date"
            id="datePublished"
            placeholder="Published Date"
            value={this.state.datePublished}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            id="videoLength"
            placeholder="Length of Video (optional)"
            value={this.state.videoLength}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            id="timeToComplete"
            placeholder="Time to complete resource"
            value={this.state.timeToComplete}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            id="rating"
            placeholder="1 to 5 raiting"
            value={this.state.rating}
            onChange={(e) => this.handleChange(e)}
          />
          <button className="btn waves-effect waves-light" type="submit" name="action" >Submit</button>
        </form>
      </div>
        );
    };
};

const myStyles = {
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "20%",
    marginLeft: "20%",
    flexDirection: "column",
  },
  input: {
    width: "70%",
    height: 32,
    fontSize: 20,
    marginBottom: 4,
  },
  button: {
    alignSelf: "center",
    // backgroundColor: "#F96295",
    backgroundColor: "#ff62a1",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 5,
    width: "50%",
    //maxWidth:
    borderRadius: 10,
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
};


export default PostForm;