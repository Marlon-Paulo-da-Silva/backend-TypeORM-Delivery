import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEstablishment1628255448131 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"'); 
        await queryRunner.createTable(
            new Table({
                name: 'establishments',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'email',
                        type: 'varchar'
                    },
                    {
                        name: 'address',
                        type: 'varchar'
                    },
                    {
                        name: 'number',
                        type: 'integer'
                    },
                    {
                        name: 'complement',
                        type: 'varchar'
                    },
                    {
                        name: 'telephone',
                        type: 'varchar'
                    },
                    {
                        name: 'created_At',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_At',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('clients');
    }

}
