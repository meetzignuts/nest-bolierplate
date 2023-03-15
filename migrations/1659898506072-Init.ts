import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1659898506072 implements MigrationInterface {
    name = 'Init1659898506072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
    }

}

//--For create Table--
// await queryRunner.query(`CREATE TABLE \`admin\` (\`createdAt\` bigint(20) NULL, \`updatedAt\` bigint NULL, \`deletedAt\` bigint NULL, \`createdBy\` varchar(40) NULL, \`updatedBy\` varchar(40) NULL, \`deletedBy\` varchar(40) NULL, \`id\` varchar(36) NOT NULL, \`name\` varchar(128) NULL, \`email\` varchar(128) NULL, \`phone\` varchar(15) NULL, \`phoneCountryCode\` varchar(5) NULL, \`loginCode\` varchar(10) NULL, \`authToken\` varchar(255) NULL, \`isActive\` tinyint NULL DEFAULT 1, \`isDeleted\` tinyint NULL DEFAULT 0, INDEX \`IDX_a026be7ca12f8999cbdf96dec2\` (\`name\`), INDEX \`IDX_de87485f6489f5d0995f584195\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);

//--For Add Foreign Key--
//await queryRunner.query(`ALTER TABLE \`admin_email\` ADD CONSTRAINT \`FK_c69ea757ed34492ad6cda803cf5\` FOREIGN KEY (\`senderId\`) REFERENCES \`admin\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);

//--For Drop Foreign Key--
//await queryRunner.query(`ALTER TABLE \`bike\` DROP FOREIGN KEY \`FK_e3d7f63fbf62e0f8fea7e1ba0ce\``);

//--For Drop Index--
//await queryRunner.query(`DROP INDEX \`IDX_17a4a7ba48d242cd618c23ed10\` ON \`shop\``);

//--For Drop Table--
//await queryRunner.query(`DROP TABLE \`admin\``);
