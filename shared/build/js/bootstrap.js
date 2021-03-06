/** @jsx React.DOM */

/**
 * License
 *
 * MIT License. Copyright 2014 Alan deLevie.
 * https://github.com/adelevie/react-client-server-starter/blob/master/src/bootstrap.js
 */

var React = require('react');
var BSHead = React.createClass({displayName: 'BSHead',
  render: function() {
    var cssCdn = this.props.cssCdn;
    var presets = {
      readable: "//netdna.bootstrapcdn.com/bootswatch/3.1.0/readable/bootstrap.min.css",
      journal: "//netdna.bootstrapcdn.com/bootswatch/3.1.0/journal/bootstrap.min.css",
      superhero: "//netdna.bootstrapcdn.com/bootswatch/3.1.0/superhero/bootstrap.min.css"
    };
    var myCssCdn = presets[cssCdn];
    if (typeof myCssCdn === 'undefined') {
      myCssCdn = cssCdn;
    };
    return (
      React.DOM.head(null, 
        React.DOM.title(null, "Example App"),
        React.DOM.link( {href:myCssCdn, rel:"stylesheet"}),
        this.props.children
      )      
    )
  }
});

var BSColumn = React.createClass({displayName: 'BSColumn',
  render: function() {
    var width = "col-md-" + this.props.width + " column";
    return this.transferPropsTo(
      React.DOM.div( {className:width}, 
        this.props.children
      )
    )
  }
});

var BSContainer = React.createClass({displayName: 'BSContainer',
  render: function() {
    return this.transferPropsTo(
      React.DOM.div( {className:"container"}, 
        this.props.children
      )
    )
  }
});

var BSListGroup = React.createClass({displayName: 'BSListGroup',
  render: function() {
    return this.transferPropsTo(
      React.DOM.div( {className:"list-group"}, 
        this.props.children
      )
    )
  }
});

var BSListGroupItem = React.createClass({displayName: 'BSListGroupItem',
  proptypes: {
    active: React.PropTypes.bool,   // TODO: test this
    heading: React.PropTypes.bool
  },
  render: function() {
    var tag = "div";
    var active = this.props.active;
    var activeStr = "";
    if (typeof active !== 'undefined') {
      if (active) {
        activeStr = " active";
        tag = "a";
      }
    }
    if (typeof this.props.href !== 'undefined') {
      tag = "a";
    }
    var heading = this.props.heading;
    var headingStr = "";
    if (typeof heading !== 'undefined') {
      if (heading) {
        headingStr = "-heading";
      }
    }
    var classNameStr = "list-group-item" + headingStr + activeStr;
    return this.transferPropsTo(React.DOM[tag](
      {className: classNameStr}, 
      this.props.children
    ))
  }
});

var BSForm = React.createClass({displayName: 'BSForm',
  render: function() {
    return (
      this.transferPropsTo(
        React.DOM.form( {role:"form"}, 
          this.props.children
        )
      )
    )
  }
});

var BSHelpBlock = React.createClass({displayName: 'BSHelpBlock',
  render: function() {
    return this.transferPropsTo(
      React.DOM.p( {className:"help-block"}, 
        this.props.children
      )
    )
  }
});

var BSFormGroup = React.createClass({displayName: 'BSFormGroup',
  render: function() {
    return this.transferPropsTo(
      React.DOM.div( {className:"form-group"}, 
        this.props.children
      )
    )
  }
});

var BSFormGroup = React.createClass({displayName: 'BSFormGroup',
  render: function() {
    return this.transferPropsTo(
      React.DOM.div( {className:"form-group"}, 
        this.props.children
      )
    )
  }
});

var BSCheckBox = React.createClass({displayName: 'BSCheckBox',
  render: function() {
    return (
      React.DOM.div( {className:"checkbox"}, 
        React.DOM.label(null, 
          React.DOM.input( {name:this.props.name,
                 type:"checkbox", 
                 id:this.props.id} ), 
          this.props.children
        )
      )
    )
  }
});

var BSInput = React.createClass({displayName: 'BSInput',
  render: function() {
    var helpTextNode;
    helpText = this.props.helpText;
    if (typeof helpText !== 'undefined') {
      helpTextNode = (BSHelpBlock(null, helpText));
    }
    var inputNode = React.DOM.input({
      className: "form-control"
    }, null);
    this.transferPropsTo(inputNode);
    return (
      BSFormGroup(null, 
        React.DOM.label( {for:this.props.id}, this.props.children),
        inputNode,
        helpTextNode
      )
    )
  }
});

var BSRow = React.createClass({displayName: 'BSRow',
  render: function() {
    return (
      React.DOM.div( {className:"row clearfix"}, 
        this.props.children
      )
    )
  }
});

var BSTopBar = React.createClass({displayName: 'BSTopBar',
  render: function() {
    return (
      BSRow(null, 
        BSColumn( {width:"12"}, 
          React.DOM.h3(null, this.props.title)
        )
      )
    )
  }
});

var NavBar = React.createClass({displayName: 'NavBar',
  render: function() {
    var BSListGroupItemNodes = this.props.pages.map(function(page) {
      return (
        BSListGroupItem( {href:page.route, active:page.active}, 
          page.name
        ));
    });
    return (
      BSListGroup(null, 
        BSListGroupItemNodes
      )
    );
  }
});

var BSButton = React.createClass({displayName: 'BSButton',
  render: function() {
    return this.transferPropsTo(
      React.DOM.button( {type:"submit", className:"btn btn-default"}, 
        this.props.children
      )
    )
  }
});

var ExampleForm = React.createClass({displayName: 'ExampleForm',
  render: function() {
    return (
      BSForm( {method:"get"}, 
        BSInput( {type:"email", id:"exampleInputEmail1", name:"email", name:"alan"}, "Email Address"),
        BSInput( {type:"password", id:"exampleInputPassword1"}, "Password"),
        BSInput( {type:"file", 
                 id:"exampleInputFile", 
                 helpText:"Example block-level help text here."}, 
          "File Input"
        ),
        BSCheckBox( {type:"checkbox", id:"exampleCheckbox", name:"exampleCheckbox"}, "Check it"),
        BSButton(null, "Submit")
      )
    )
  }
});

var Layout = React.createClass({displayName: 'Layout',
  render: function() {
    return (
      React.DOM.html(null, 
        BSHead( {cssCdn:"readable"}),
        React.DOM.body(null, 
          BSContainer(null, 
            BSTopBar( {title:"Example App"} ),
            BSRow(null, 
              BSColumn( {width:"2"}, 
                "left"
              ),
              BSColumn( {width:"6"}, 
                this.props.children
              ),
              BSColumn( {width:"4"}, 
                "right"
              )
            )
          ),
          React.DOM.div( {id:"clientDiv"} ),
          React.DOM.script( {src:"/static/js/dep/underscore.js"} ),
          React.DOM.script( {src:"/static/js/dep/jquery.js"} ),
          React.DOM.script( {src:"/static/js/dep/backbone.js"} ),
          React.DOM.script( {src:"/static/js/app.js"} )
        )
      )
    )
  }
});

var Widget = React.createClass({displayName: 'Widget',
  render: function() {
    return (
      React.DOM.p(null, "Widget rendered from ", this.props.clientOrServer,". Post Id from params: ", this.props.postId,".")
    );
  }
});

module.exports = {
  BSHead: BSHead,
  BSColumn: BSColumn,
  BSContainer: BSContainer,
  BSListGroup: BSListGroup,
  BSListGroupItem: BSListGroupItem,
  BSForm: BSForm,
  BSHelpBlock: BSHelpBlock,
  BSFormGroup: BSFormGroup,
  BSInput: BSInput,
  BSCheckBox: BSCheckBox,
  BSRow: BSRow,
  BSTopBar: BSTopBar,
  BSButton: BSButton,
  NavBar: NavBar,
  ExampleForm: ExampleForm,
  Layout: Layout,
  Widget: Widget,
};
