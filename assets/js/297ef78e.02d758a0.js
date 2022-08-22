"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="Connector definition",l={unversionedId:"connector-development/config-based/yaml-structure",id:"connector-development/config-based/yaml-structure",title:"Connector definition",description:"Connectors are defined as a yaml configuration describing the connector's Source.",source:"@site/../docs/connector-development/config-based/yaml-structure.md",sourceDirName:"connector-development/config-based",slug:"/connector-development/config-based/yaml-structure",permalink:"/connector-development/config-based/yaml-structure",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/yaml-structure.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Object instantiation",id:"object-instantiation",level:2},{value:"$options",id:"options",level:3},{value:"References",id:"references",level:2},{value:"String interpolation",id:"string-interpolation",level:2},{value:"Component schema reference",id:"component-schema-reference",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connector-definition"},"Connector definition"),(0,r.kt)("p",null,"Connectors are defined as a yaml configuration describing the connector's Source."),(0,r.kt)("p",null,"3 top-level fields are required:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"streams"),": List of streams that are part of the source"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"check"),": Component describing how to check the connection."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"version"),": The framework version.")),(0,r.kt)("p",null,"The configuration will be validated against this JSON Schema, which defines the set of valid properties."),(0,r.kt)("p",null,"The general structure of the YAML is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "0.1.0"\ndefinitions:\n  <key-value pairs defining objects which will be reused in the YAML connector>\nstreams:\n  <list stream definitions>\ncheck:\n  <definition of connection checker>\n')),(0,r.kt)("p",null,"We recommend using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration Based Source")," template from the template generator in ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connector-templates/generator")," to generate the basic file structure."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/tutorial/testing"},"tutorial for a complete connector definition")),(0,r.kt)("h2",{id:"object-instantiation"},"Object instantiation"),(0,r.kt)("p",null,"This section describes the object that are to be instantiated from the YAML definition."),(0,r.kt)("p",null,"If the component is a literal, then it is returned as is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"3\n")),(0,r.kt)("p",null,"will result in"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"3\n")),(0,r.kt)("p",null,'If the component is a mapping with a "class_name" field,\nan object of type "class_name" will be instantiated by passing the mapping\'s other fields to the constructor'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'my_component:\n  class_name: "fully_qualified.class_name"\n  a_parameter: 3\n  another_parameter: "hello"\n')),(0,r.kt)("p",null,"will result in"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'fully_qualified.class_name(a_parameter=3, another_parameter="hello")\n')),(0,r.kt)("p",null,'If the component definition is a mapping with a "type" field,\nthe factory will lookup the ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/airbyte_cdk/sources/declarative/parsers/class_types_registry.py"},"CLASS_TYPES_REGISTRY"),' and replace the "type" field by "class_name" -> CLASS_TYPES_REGISTRY',"[type]","\nand instantiate the object from the resulting mapping"),(0,r.kt)("p",null,'If the component definition is a mapping with neither a "class_name" nor a "type" field,\nthe factory will do a best-effort attempt at inferring the component type by looking up the parent object\'s constructor type hints.\nIf the type hint is an interface present in ',"[DEFAULT_IMPLEMENTATIONS_REGISTRY]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/airbyte_cdk/sources/declarative/parsers/default_implementation_registry.py"},"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/airbyte_cdk/sources/declarative/parsers/default_implementation_registry.py"),",\nthen the factory will create an object of its default implementation."),(0,r.kt)("p",null,"If the component definition is a list, then the factory will iterate over the elements of the list,\ninstantiate its subcomponents, and return a list of instantiated objects."),(0,r.kt)("p",null,"If the component has subcomponents, the factory will create the subcomponents before instantiating the top level object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "type": TopLevel\n  "param":\n    {\n      "type": "ParamType"\n      "k": "v"\n    }\n}\n')),(0,r.kt)("p",null,"will result in"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'TopLevel(param=ParamType(k="v"))\n')),(0,r.kt)("p",null,"More details on object instantiation can be found ",(0,r.kt)("a",{parentName:"p",href:"https://airbyte-cdk.readthedocs.io/en/latest/api/airbyte_cdk.sources.declarative.parsers.html?highlight=factory#airbyte_cdk.sources.declarative.parsers.factory.DeclarativeComponentFactory"},"here"),"."),(0,r.kt)("h3",{id:"options"},"$options"),(0,r.kt)("p",null,"Parameters can be passed down from a parent component to its subcomponents using the $options key.\nThis can be used to avoid repetitions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"outer:\n  $options:\n    MyKey: MyValue\n  inner:\n    k2: v2\n")),(0,r.kt)("p",null,'This the example above, if both outer and inner are types with a "MyKey" field, both of them will evaluate to "MyValue".'),(0,r.kt)("p",null,"These parameters can be overwritten by subcomponents as a form of specialization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"outer:\n  $options:\n    MyKey: MyValue\n  inner:\n    $options:\n      MyKey: YourValue\n    k2: v2\n")),(0,r.kt)("p",null,'In this example, "outer.MyKey" will evaluate to "MyValue", and "inner.MyKey" will evaluate to "YourValue".'),(0,r.kt)("p",null,"The value can also be used for string interpolation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"outer:\n  $options:\n    MyKey: MyValue\n  inner:\n    k2: \"MyKey is {{ options['MyKey'] }}\"\n")),(0,r.kt)("p",null,'In this example, outer.inner.k2 will evaluate to "MyKey is MyValue"'),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,"Strings can contain references to previously defined values.\nThe parser will dereference these values to produce a complete object definition."),(0,r.kt)("p",null,'References can be defined using a "*ref({arg})" string.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'key: 1234\nreference: "*ref(key)"\n')),(0,r.kt)("p",null,"will produce the following definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"key: 1234\nreference: 1234\n")),(0,r.kt)("p",null,"This also works with objects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'key_value_pairs:\n  k1: v1\n  k2: v2\nsame_key_value_pairs: "*ref(key_value_pairs)"\n')),(0,r.kt)("p",null,"will produce the following definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"key_value_pairs:\n  k1: v1\n  k2: v2\nsame_key_value_pairs:\n  k1: v1\n  k2: v2\n")),(0,r.kt)("p",null,"The $ref keyword can be used to refer to an object and enhance it with addition key-value pairs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'key_value_pairs:\n  k1: v1\n  k2: v2\nsame_key_value_pairs:\n  $ref: "*ref(key_value_pairs)"\n  k3: v3\n')),(0,r.kt)("p",null,"will produce the following definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"key_value_pairs:\n  k1: v1\n  k2: v2\nsame_key_value_pairs:\n  k1: v1\n  k2: v2\n  k3: v3\n")),(0,r.kt)("p",null,"References can also point to nested values.\nNested references are ambiguous because one could define a key containing with ",(0,r.kt)("inlineCode",{parentName:"p"},"."),"\nin this example, we want to refer to the limit key in the dict object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'dict:\n  limit: 50\nlimit_ref: "*ref(dict.limit)"\n')),(0,r.kt)("p",null,"will produce the following definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"dict\nlimit: 50\nlimit-ref: 50\n")),(0,r.kt)("p",null,"whereas here we want to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"nested.path")," value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'nested:\n  path: "first one"\nnested.path: "uh oh"\nvalue: "ref(nested.path)\n')),(0,r.kt)("p",null,"will produce the following definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'nested:\n  path: "first one"\nnested.path: "uh oh"\nvalue: "uh oh"\n')),(0,r.kt)("p",null,"To resolve the ambiguity, we try looking for the reference key at the top-level, and then traverse the structs downward\nuntil we find a key with the given path, or until there is nothing to traverse."),(0,r.kt)("p",null,"More details on referencing values can be found ",(0,r.kt)("a",{parentName:"p",href:"https://airbyte-cdk.readthedocs.io/en/latest/api/airbyte_cdk.sources.declarative.parsers.html?highlight=yamlparser#airbyte_cdk.sources.declarative.parsers.yaml_parser.YamlParser"},"here"),"."),(0,r.kt)("h2",{id:"string-interpolation"},"String interpolation"),(0,r.kt)("p",null,"String values can be evaluated as Jinja2 templates."),(0,r.kt)("p",null,"If the input string is a raw string, the interpolated string will be the same.\n",(0,r.kt)("inlineCode",{parentName:"p"},'"hello world" -> "hello world"')),(0,r.kt)("p",null,"The engine will evaluate the content passed within ",(0,r.kt)("inlineCode",{parentName:"p"},"{{...}}"),', interpolating the keys from context-specific arguments.\nthe "options" keyword ',(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/yaml-structure#object-instantiation"},"see ($options)")," can be referenced."),(0,r.kt)("p",null,'For example, some_object.inner_object.key will evaluate to "Hello airbyte" at runtime.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'some_object:\n  $options:\n    name: "airbyte"\n  inner_object:\n    key: "Hello {{ options.name }}"\n')),(0,r.kt)("p",null,"Some components also pass in additional arguments to the context.\nThis is the case for the ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/record-selector"},"record selector"),", which passes in an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," argument."),(0,r.kt)("p",null,"Both dot notation and bracket notations (with single quotes ( ",(0,r.kt)("inlineCode",{parentName:"p"},"'"),")) are interchangeable.\nThis means that both these string templates will evaluate to the same string:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},'"{{ options.name }}"')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"\"{{ options['name'] }}\""))),(0,r.kt)("p",null,"In additional to passing additional values through the $options argument, macros can be called from within the string interpolation.\nFor example,\n",(0,r.kt)("inlineCode",{parentName:"p"},'"{{ max(2, 3) }}" -> 3')),(0,r.kt)("p",null,"The macros available can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/airbyte_cdk/sources/declarative/interpolation/macros.py"},"here"),"."),(0,r.kt)("p",null,"Additional information on jinja templating can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/3.1.x/templates/#"},"https://jinja.palletsprojects.com/en/3.1.x/templates/#")),(0,r.kt)("h2",{id:"component-schema-reference"},"Component schema reference"),(0,r.kt)("p",null,"A JSON schema representation of the relationships between the components that can be used in the YAML configuration can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/airbyte_cdk/sources/declarative/config_component_schema.json"},"here"),"."))}u.isMDXComponent=!0}}]);