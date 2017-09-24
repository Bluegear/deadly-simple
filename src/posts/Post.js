import React, { Component } from 'react';
import marked from 'marked';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        console.log(this.props.match.params.filename);
        const mdPath = require("./" + this.props.match.params.filename + ".md");
      
        fetch(mdPath)
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
            <div className="Post post content">
                <section>
                    <article dangerouslySetInnerHTML={{__html: markdown}}></article>
                </section>
            </div>
        );
    }
}

export default Post;
