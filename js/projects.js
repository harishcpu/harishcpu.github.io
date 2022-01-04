var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // Dummy data placeholder. Replace with array of actual data objects to come from Airtable 
var data = [
{
"project": "Unix Domain Sockets",
"stack": ["clang"],
"description": "Server Client based communication using Socket Programming in Unix environment.",
"website": "https://www.google.com",
"github": "https://www.github.com/harishkumar101/Unix-Domain-Sockets",
"image": "img/projects/unix-sockets.png",
"status": "On-going" },
{
"project": "An Autonomous Surveillance Robot",
"stack": ["clang"],
"description": "An autonomous surveillance robot which can replace armed forces at military borders.",
"website": "https://harishkumar101.wordpress.com/2017/10/13/the-autonomous-surveillance-robot",
"github": "https://www.github.com",
"image": "img/projects/btechproject.jpeg",
"status": "Completed" },
{
"project": "Lexical Analyzer",
"stack": ["clang"],
"description": "An application to identify the syntax errors in a typical computer program written in the C language.",
"website": "https://www.google.com",
"github": "https://github.com/harishkumar101/Lexical-Analyzer",
"image": "img/projects/lexicalanalyzer.png",
"status": "Completed" },
{
"project": "Network Packet Sniffer",
"stack": ["python"],
"description": "A network packet sniffer built with the help of 'scapy', a python based module which is built entirely dedicated to capturing, handling and analyzing network traffic.",
"website": "https://www.google.com",
"github": "https://github.com/harishkumar101/Network-Packet-Sniffer",
"image": "img/projects/packetsniffer.png",
"status": "Completed" },
{
"project": "AristaConf",
"stack": ["python"],
"description": "A python3 application to read/write Arista vEOS device configurations via SSH.",
"website": "https://www.google.com",
"github": "https://github.com/harishkumar101/Configure-Arista-vEOS-Switches-via-SSH",
"image": "img/projects/aristaconf.png",
"status": "Completed" },
{
"project": "INTAL",
"stack": ["clang"],
"description": "C application that performs calculations on numbers whose digits of precision are limited only by the available memory of the host system. This contrasts with the faster fixed-precision arithmetic found in most arithmetic logic unit (ALU) hardware, which typically offers between 8 and 64 bits of precision.",
"website": "https://www.google.com",
"github": "https://github.com/harishkumar101/Arbitrary-Precision-Calculator",
"image": "img/projects/apc.png",
"status": "Completed" },
{
"project": "TermFlash",
"stack": ["bash"],
"description": "C application to take tests similar to the ones we take online. This application replaces the need for flashcards as well.",
"website": "https://www.google.com",
"github": "https://github.com/harishkumar101/Flashcard-Application-for-Terminal",
"image": "img/projects/flashcards.jpeg",
"status": "Completed" },
{
"project": "MemoryLeakDetector",
"stack": ["c"],
"description": "Design and Implementation of Java-like Garbage Collector for C.",
"website": "https://www.google.com",
"github": "https://github.com/harishkumar101/MemoryLeakDetector",
"image": "img/projects/memory_leak_final.png",
"status": "Completed" }
];



function Layout(props) {
  return (
    React.createElement("div", { className: "row" }, props.children));

}var

Card = function (_React$Component) {_inherits(Card, _React$Component);function Card() {_classCallCheck(this, Card);return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));}_createClass(Card, [{ key: "render", value: function render()
    {
      var style = {
        img: {
          maxWidth: "400px" } };


      return (
        React.createElement("div", { className: "col m4" },
          React.createElement("div", { className: "card hoverable" },
            React.createElement("div", { className: "card-image waves-effect waves-block waves-light" },
              React.createElement("img", { style: style.img, className: "activator", src: this.props.data.image })),

            React.createElement("div", { className: "card-content" },
              React.createElement("div", null,
                React.createElement(StackIcons, { data: this.props.data.stack })),

              React.createElement("span", { className: "card-title activator grey-text text-darken-4" },
                this.props.data.project,
                React.createElement("i", { className: "material-icons right" }, "more_vert")),

              React.createElement("div", null,
                //React.createElement("span", null, React.createElement("a", { href: this.props.data.website }, "Website")), 
                React.createElement("span", null, React.createElement("a", { className: "github", href: this.props.data.github }, "Github")))),


            React.createElement("div", { className: "card-reveal" },
              React.createElement("span", { className: "card-title grey-text text-darken-4" }, this.props.data.project, React.createElement("i", { className: "material-icons right" }, "close")),
              React.createElement("div", null, React.createElement("span", { className: "status", margin: "10%"}, this.props.data.status)),
              React.createElement("p", {style: {color: "black", marginTop: "10%", fontSize: "11pt"}}, this.props.data.description),
              React.createElement("p", null, React.createElement("strong", null, "Need:")),
              React.createElement("p", null, this.props.data.needs)))));




    } }]);return Card;}(React.Component);


// Note: Empty span tag on line 115 is there as placeholder for
// the custom CSS to inject text based on stack item.
function StackIcons(props) {
  var array = props.data;
  var icons = array.map(function (item) {
    return (
      React.createElement("div", { key: item, className: "icon" },
        React.createElement("span", { className: item }, React.createElement("span", null))));


  });
  return (
    React.createElement("div", null, " ", icons, " "));

}

function Projects(props) {
  var projects = [];
  var data = props.data;
  data.forEach(function (item) {projects.push(React.createElement(Card, { data: item }));});
  return (
    React.createElement("div", null, projects));

}

ReactDOM.render(
React.createElement(Layout, { children: React.createElement(Projects, { data: data }) }),
document.getElementById('root'));
