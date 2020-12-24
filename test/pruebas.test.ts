
import { CreateInformeRequest, CreateInformeResponse, CreateInformeService } from "../src/application/create.informe.service";
import { IUnitOfWork } from "../src/infrastructure/contracts/unitOfWork.interface";
import { UnitOfWork } from "../src/infrastructure/unitOfWork/unitOfWork";
import { createConnection } from "typeorm";
import { SearchInformeResponse, SearchInformeService } from "../src/application/searchInforme.service";

describe('Application tests', () => {

    let unitOfWork: IUnitOfWork;

    beforeAll(async () => {
        unitOfWork = new UnitOfWork(await createConnection({
            type: 'mongodb',
            url: 'mongodb+srv://remembernoob:remembernoob@cluster0.hotee.mongodb.net/memory?retryWrites=true&w=majority',
            logging: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dropSchema: true,
            synchronize: true,
            entities: ['src/infrastructure/database/entity/*.ts']
        }));
    })


    describe('informe test', () => {

        test('correct registry', async () => {

            const service: CreateInformeService = new CreateInformeService(unitOfWork);

            const response: CreateInformeResponse = await service.execute(
                new CreateInformeRequest(
                    1,
                    'assets/url',
                    'descripcionImg',
                    'ubicacion'
                )
            );

            expect(response.message).toBe('creado satisfactoriamente');
        });

        test('correct consult', async () => {

            const service: SearchInformeService = new SearchInformeService(unitOfWork);

            const response: SearchInformeResponse = await service.execute( );

            expect(response._informes.length).toBe(1);
        });

    })
})