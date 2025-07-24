import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import { Layout, Grid, Row, Col , InputNumber, Table, Form, Button} from 'antd';
import { useState } from 'react';



function App() {
	const {Head, Content} = Layout
	const {Column} = Table
	const {Item} = Form
  	const [probs, setProbs] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])	
	const [form] = Form.useForm();

	const data = []
	const row = {
		key:1
	}
	for(let i=0;i<24;i++){
		let propv  = probs[i]/100.0
		row[i.toString()+'h'] = <Form.Item name={i.toString()+'h'}><InputNumber align='center' max={1} min={0} step={0.1} name={i.toString()+'h'} defaultValue={propv}></InputNumber></Form.Item>
	}
	data.push(row)

	const columns = []
	for(let i=0;i<24;i++){
		const col = {}
		col['dataIndex'] = i.toString()+'h'
		col['title'] = i.toString()+'h'
		col['align'] = 'center'
		columns.push(col)
	}
  

	const onClick = (e)=>{
		console.log(form.getFieldsValue())
		
	}

	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<p>
				Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
				>
				Learn React
				</a>
			</header>
			<Content>
				<Row>
					<Col span={24}>
						<Form form={form}>
							<Table dataSource={data} pagination={false} columns={columns}>
								
							</Table>
						</Form>
					</Col>
				</Row>
			</Content>
			<Button onClick={onClick}>sfdafa</Button>
		</div>

	);
}

export default App;
