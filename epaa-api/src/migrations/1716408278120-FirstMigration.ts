import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1716408278120 implements MigrationInterface {
    name = 'FirstMigration1716408278120'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "epaa"."asistente_id_asistente_seq" OWNED BY "epaa"."asistente"."id_asistente"`);
        await queryRunner.query(`ALTER TABLE "epaa"."asistente" ALTER COLUMN "id_asistente" SET DEFAULT nextval('"epaa"."asistente_id_asistente_seq"')`);
        await queryRunner.query(`ALTER TABLE "epaa"."asistente" DROP COLUMN "fecha_nac"`);
        await queryRunner.query(`ALTER TABLE "epaa"."asistente" ADD "fecha_nac" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "epaa"."asistente" DROP COLUMN "dni"`);
        await queryRunner.query(`ALTER TABLE "epaa"."asistente" ADD "dni" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "epaa"."asistente" ALTER COLUMN "foto_perfil" SET NOT NULL`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "epaa"."adulto_mayor_id_adulto_mayor_seq" OWNED BY "epaa"."adulto_mayor"."id_adulto_mayor"`);
        await queryRunner.query(`ALTER TABLE "epaa"."adulto_mayor" ALTER COLUMN "id_adulto_mayor" SET DEFAULT nextval('"epaa"."adulto_mayor_id_adulto_mayor_seq"')`);
        await queryRunner.query(`ALTER TABLE "epaa"."adulto_mayor" DROP COLUMN "fecha_nac"`);
        await queryRunner.query(`ALTER TABLE "epaa"."adulto_mayor" ADD "fecha_nac" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "epaa"."adulto_mayor" DROP COLUMN "dni"`);
        await queryRunner.query(`ALTER TABLE "epaa"."adulto_mayor" ADD "dni" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "epaa"."adulto_mayor" ALTER COLUMN "foto_perfil" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "epaa"."adulto_mayor" ALTER COLUMN "seguro" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "epaa"."adulto_mayor" ALTER COLUMN "seguro" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "epaa"."adulto_mayor" ALTER COLUMN "foto_perfil" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "epaa"."adulto_mayor" DROP COLUMN "dni"`);
        await queryRunner.query(`ALTER TABLE "epaa"."adulto_mayor" ADD "dni" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "epaa"."adulto_mayor" DROP COLUMN "fecha_nac"`);
        await queryRunner.query(`ALTER TABLE "epaa"."adulto_mayor" ADD "fecha_nac" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "epaa"."adulto_mayor" ALTER COLUMN "id_adulto_mayor" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "epaa"."adulto_mayor_id_adulto_mayor_seq"`);
        await queryRunner.query(`ALTER TABLE "epaa"."asistente" ALTER COLUMN "foto_perfil" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "epaa"."asistente" DROP COLUMN "dni"`);
        await queryRunner.query(`ALTER TABLE "epaa"."asistente" ADD "dni" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "epaa"."asistente" DROP COLUMN "fecha_nac"`);
        await queryRunner.query(`ALTER TABLE "epaa"."asistente" ADD "fecha_nac" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "epaa"."asistente" ALTER COLUMN "id_asistente" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "epaa"."asistente_id_asistente_seq"`);
    }

}
