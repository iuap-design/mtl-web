/**
 * 单表参照
 */
import React, { Component } from 'react';
import { FormControl, Form } from 'tinper-bee';
import { connect } from 'mini-store';
import RefWithInput from 'ref-core/lib/refs/refcorewithinput';
import RefTable from '../../components/RefControl/Table';
import 'ref-core/lib/refs/refcorewithinput.css';
import 'ref-multiple-table-ui/dist/index.css';

@connect()
class TableRender extends Component {
    onSave = (item) => {
        console.log('save', item)
    }
    onCancel = () => {

    }

    render() {
        let { store } = this.props;
        let { viewApplication } = store.getState().meta;
        const { getFieldError, getFieldProps } = this.props.form;
        const { cBillName, view } = viewApplication;

        const props = {
            placeholder: cBillName,
            title: view.cTemplateTitle,
            backdrop: true,
            disabled: false,
            multiple: false,
            strictMode: true,
            miniSearch: true,
        }

        return (
                <RefWithInput
                    {...props}
                    onSave={this.onSave}
                    onCancel={this.onCancel}
                    {...getFieldProps('valueField', {
                        // initialValue:'{\"refname\":\"高级-T3\",\"refpk\":\"level5\"}',
                        rules: [{
                            message: '请输入姓名',
                            pattern: /[^{"refname":"","refpk":""}]/
                        }]
                    })}
                >
                    <RefTable />
                </RefWithInput>
        );
    }
}

export default Form.createForm()(TableRender);
