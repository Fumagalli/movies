import { MigrationInterface, QueryRunner } from "typeorm";

export class AddImagePathToMovie1748196098558 implements MigrationInterface {
    name = 'AddImagePathToMovie1748196098558'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" ADD "imagePath" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "imagePath"`);
    }

}
