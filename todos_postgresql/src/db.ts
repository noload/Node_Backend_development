
import {Client} from 'pg'
import { connectionString } from './serverConfig'

export const client = new Client({
 connectionString:connectionString
})

