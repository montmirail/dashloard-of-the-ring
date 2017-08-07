import React, { Component } from 'react';

import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Actions from 'grommet/components/icons/base/Actions';

import NavControl from '../components/NavControl';

class Users extends Component {

    render() {
        return (
            <Section primary={true}>
                <Header size='medium'>
                    <Box flex={true}
                         margin={{ horizontal: 'medium'}}
                         direction='row'>
                       <NavControl />
                        <Title>
                            Users
                        </Title>
                        <Box flex={true}
                             justify='end'
                             direction='row'
                             responsive={false}>
                            <Menu icon={<Actions />} dropAlign={{"right": "right"}}>
                                <Anchor href='#' className='active'>New User</Anchor>
                            </Menu>
                        </Box>
                    </Box>
                </Header>

                <Box margin="medium">

                    <Table selectable={true} scrollable={false}>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Full Name</th>
                            <th>Note</th>
                        </tr>
                        </thead>
                        <tbody>
                        <TableRow>
                            <td>1</td>
                            <td>Alan</td>
                            <td className='secondary'>plays accordion</td>
                        </TableRow>

                        <TableRow>
                            <td>1</td>
                            <td>Alan</td>
                            <td className='secondary'>plays accordion</td>
                        </TableRow>
                        </tbody>
                    </Table>

                </Box>
            </Section>
        )
    }
}

export default Users;