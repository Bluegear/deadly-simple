import React, { Component } from 'react';
import marked from 'marked';

class FirstPost extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        const readmePath = require("./firstpost.md");
      
        fetch(readmePath)
          .then(response => {
            return response.text()
          })
          .then(text => {
            this.setState({
              markdown: marked(text)
            })
          })
      }

    render() {
        const { markdown } = this.state;
        return (
            <div className="FirstPost post content">
                <section>
                    <article dangerouslySetInnerHTML={{__html: markdown}}></article>
                </section>
            </div>
        );
    }
}

export default FirstPost;
