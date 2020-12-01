import { Injectable } from '@angular/core';
import { Trainer } from '../class/trainer';

@Injectable({
  providedIn: 'root'
})
export class MockDataReturnService {

  constructor() { }

  trainers: any[] = [
    {
      "firstName": "Mock 1223",
      "lastName": "Associate 1223",
      "email": "mock1223.employee906bb611-b2a8-4dce-b70f-94f5fd97da44@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1223.employee906bb611-b2a8-4dce-b70f-94f5fd97da44@mock.com",
            "firstName": "Mock 1223",
            "lastName": "Associate 1223"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1372",
      "lastName": "Associate 1372",
      "email": "mock1372.employee3c684559-f3c8-47be-80db-f96bc16a41f1@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1372.employee3c684559-f3c8-47be-80db-f96bc16a41f1@mock.com",
            "firstName": "Mock 1372",
            "lastName": "Associate 1372"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1091",
      "lastName": "Associate 1091",
      "email": "mock1091.employee2fbe714a-d582-4c30-bbc1-298f226445ac@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1091.employee2fbe714a-d582-4c30-bbc1-298f226445ac@mock.com",
            "firstName": "Mock 1091",
            "lastName": "Associate 1091"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1008",
      "lastName": "Associate 1008",
      "email": "mock1008.employeebcb5c90b-286b-41d6-b528-6f8cb52a4579@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1008.employeebcb5c90b-286b-41d6-b528-6f8cb52a4579@mock.com",
            "firstName": "Mock 1008",
            "lastName": "Associate 1008"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1201",
      "lastName": "Associate 1201",
      "email": "mock1201.employee42453084-3f57-436f-9b9b-a7848430862b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1201.employee42453084-3f57-436f-9b9b-a7848430862b@mock.com",
            "firstName": "Mock 1201",
            "lastName": "Associate 1201"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1093",
      "lastName": "Associate 1093",
      "email": "mock1093.employee693baebb-ce89-4e48-a2ee-a50399d56202@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1093.employee693baebb-ce89-4e48-a2ee-a50399d56202@mock.com",
            "firstName": "Mock 1093",
            "lastName": "Associate 1093"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1285",
      "lastName": "Associate 1285",
      "email": "mock1285.employeee478f42f-5caa-45aa-8366-9ef09be5238e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1285.employeee478f42f-5caa-45aa-8366-9ef09be5238e@mock.com",
            "firstName": "Mock 1285",
            "lastName": "Associate 1285"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1137",
      "lastName": "Associate 1137",
      "email": "mock1137.employeed2befb4d-95ff-4845-b85e-2bec37d4cefd@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1137.employeed2befb4d-95ff-4845-b85e-2bec37d4cefd@mock.com",
            "firstName": "Mock 1137",
            "lastName": "Associate 1137"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1272",
      "lastName": "Associate 1272",
      "email": "mock1272.employee7080f241-8c07-4442-8747-e86e28c94085@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1272.employee7080f241-8c07-4442-8747-e86e28c94085@mock.com",
            "firstName": "Mock 1272",
            "lastName": "Associate 1272"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1359",
      "lastName": "Associate 1359",
      "email": "mock1359.employee8905ce95-abc6-4b70-b564-6fd9b6db4715@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1359.employee8905ce95-abc6-4b70-b564-6fd9b6db4715@mock.com",
            "firstName": "Mock 1359",
            "lastName": "Associate 1359"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1204",
      "lastName": "Associate 1204",
      "email": "mock1204.employeef959acc0-7dcf-4089-b91d-231356a530de@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1204.employeef959acc0-7dcf-4089-b91d-231356a530de@mock.com",
            "firstName": "Mock 1204",
            "lastName": "Associate 1204"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1043",
      "lastName": "Associate 1043",
      "email": "mock1043.employeeb0343bc3-9c7f-4b9e-8ebb-e0977eb4238b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1043.employeeb0343bc3-9c7f-4b9e-8ebb-e0977eb4238b@mock.com",
            "firstName": "Mock 1043",
            "lastName": "Associate 1043"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1207",
      "lastName": "Associate 1207",
      "email": "mock1207.employeed690d695-5f37-4830-b0be-fd638b3801f7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1207.employeed690d695-5f37-4830-b0be-fd638b3801f7@mock.com",
            "firstName": "Mock 1207",
            "lastName": "Associate 1207"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1422",
      "lastName": "Associate 1422",
      "email": "mock1422.employeec9972c8f-be13-4416-8404-1d1ceb3f9e5c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1422.employeec9972c8f-be13-4416-8404-1d1ceb3f9e5c@mock.com",
            "firstName": "Mock 1422",
            "lastName": "Associate 1422"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1356",
      "lastName": "Associate 1356",
      "email": "mock1356.employee9a9e8974-b610-436a-963c-8be5853c5f32@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1356.employee9a9e8974-b610-436a-963c-8be5853c5f32@mock.com",
            "firstName": "Mock 1356",
            "lastName": "Associate 1356"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1288",
      "lastName": "Associate 1288",
      "email": "mock1288.employeed6ad7ac9-4f38-44c8-8726-bffeb3fc78e0@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1288.employeed6ad7ac9-4f38-44c8-8726-bffeb3fc78e0@mock.com",
            "firstName": "Mock 1288",
            "lastName": "Associate 1288"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1427",
      "lastName": "Associate 1427",
      "email": "mock1427.employee9739a1e1-051f-47b2-a6eb-10327b92856b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1427.employee9739a1e1-051f-47b2-a6eb-10327b92856b@mock.com",
            "firstName": "Mock 1427",
            "lastName": "Associate 1427"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1140",
      "lastName": "Associate 1140",
      "email": "mock1140.employee3867f44c-8ade-402b-8e1e-e0a29682a5d3@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1140.employee3867f44c-8ade-402b-8e1e-e0a29682a5d3@mock.com",
            "firstName": "Mock 1140",
            "lastName": "Associate 1140"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1275",
      "lastName": "Associate 1275",
      "email": "mock1275.employeea543131c-a057-446a-9f80-193ed6debde9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1275.employeea543131c-a057-446a-9f80-193ed6debde9@mock.com",
            "firstName": "Mock 1275",
            "lastName": "Associate 1275"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1332",
      "lastName": "Associate 1332",
      "email": "mock1332.employeeabbf8c56-1b59-4650-a06d-dde1fac07feb@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1332.employeeabbf8c56-1b59-4650-a06d-dde1fac07feb@mock.com",
            "firstName": "Mock 1332",
            "lastName": "Associate 1332"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1048",
      "lastName": "Associate 1048",
      "email": "mock1048.employee381fdc34-12af-48ee-87d3-20fcd312ec16@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1048.employee381fdc34-12af-48ee-87d3-20fcd312ec16@mock.com",
            "firstName": "Mock 1048",
            "lastName": "Associate 1048"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1469",
      "lastName": "Associate 1469",
      "email": "mock1469.employeeff5a0a99-c5e4-4d91-a32e-f50a327fecfd@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1469.employeeff5a0a99-c5e4-4d91-a32e-f50a327fecfd@mock.com",
            "firstName": "Mock 1469",
            "lastName": "Associate 1469"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1230",
      "lastName": "Associate 1230",
      "email": "mock1230.employee719c424e-46cd-4a82-907e-d7b7201d4985@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1230.employee719c424e-46cd-4a82-907e-d7b7201d4985@mock.com",
            "firstName": "Mock 1230",
            "lastName": "Associate 1230"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1395",
      "lastName": "Associate 1395",
      "email": "mock1395.employeec19d8772-af8a-4966-9d89-cd44427f097a@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1395.employeec19d8772-af8a-4966-9d89-cd44427f097a@mock.com",
            "firstName": "Mock 1395",
            "lastName": "Associate 1395"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1156",
      "lastName": "Associate 1156",
      "email": "mock1156.employeeb94ef0b1-7aa9-4067-a942-d9ab50c87523@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1156.employeeb94ef0b1-7aa9-4067-a942-d9ab50c87523@mock.com",
            "firstName": "Mock 1156",
            "lastName": "Associate 1156"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1404",
      "lastName": "Associate 1404",
      "email": "mock1404.employee0df29d4d-07cb-44d0-9bf1-9de71df6286d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1404.employee0df29d4d-07cb-44d0-9bf1-9de71df6286d@mock.com",
            "firstName": "Mock 1404",
            "lastName": "Associate 1404"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1303",
      "lastName": "Associate 1303",
      "email": "mock1303.employee972942b8-9128-4882-8ef2-9403bde3051f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1303.employee972942b8-9128-4882-8ef2-9403bde3051f@mock.com",
            "firstName": "Mock 1303",
            "lastName": "Associate 1303"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1146",
      "lastName": "Associate 1146",
      "email": "mock1146.employeeb08a724f-58a4-42d4-9391-8db451dc04e9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1146.employeeb08a724f-58a4-42d4-9391-8db451dc04e9@mock.com",
            "firstName": "Mock 1146",
            "lastName": "Associate 1146"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1380",
      "lastName": "Associate 1380",
      "email": "mock1380.employee8e289f2a-4696-455a-8610-6dde9762107a@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1380.employee8e289f2a-4696-455a-8610-6dde9762107a@mock.com",
            "firstName": "Mock 1380",
            "lastName": "Associate 1380"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1495",
      "lastName": "Associate 1495",
      "email": "mock1495.employeeb76835e8-10f3-4e4d-b17f-9e9cbd6266f8@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1495.employeeb76835e8-10f3-4e4d-b17f-9e9cbd6266f8@mock.com",
            "firstName": "Mock 1495",
            "lastName": "Associate 1495"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1360",
      "lastName": "Associate 1360",
      "email": "mock1360.employeebf0107ff-a696-4952-956e-720ff22f0eb0@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1360.employeebf0107ff-a696-4952-956e-720ff22f0eb0@mock.com",
            "firstName": "Mock 1360",
            "lastName": "Associate 1360"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1025",
      "lastName": "Associate 1025",
      "email": "mock1025.employeed02dedcf-c1b3-4092-9247-fb8cf21f07b7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1025.employeed02dedcf-c1b3-4092-9247-fb8cf21f07b7@mock.com",
            "firstName": "Mock 1025",
            "lastName": "Associate 1025"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1433",
      "lastName": "Associate 1433",
      "email": "mock1433.employee0d1538db-da97-4cd0-a8cf-d53f9c7ef985@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1433.employee0d1538db-da97-4cd0-a8cf-d53f9c7ef985@mock.com",
            "firstName": "Mock 1433",
            "lastName": "Associate 1433"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1016",
      "lastName": "Associate 1016",
      "email": "mock1016.employee7203ff7b-0fcb-4e9f-a7f0-5cff7d81eba9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1016.employee7203ff7b-0fcb-4e9f-a7f0-5cff7d81eba9@mock.com",
            "firstName": "Mock 1016",
            "lastName": "Associate 1016"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1123",
      "lastName": "Associate 1123",
      "email": "mock1123.employeefa09f187-cfaf-4a31-96a9-1d75ad21dced@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1123.employeefa09f187-cfaf-4a31-96a9-1d75ad21dced@mock.com",
            "firstName": "Mock 1123",
            "lastName": "Associate 1123"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1361",
      "lastName": "Associate 1361",
      "email": "mock1361.employee02b67c15-9741-47b3-abda-f3b6cfbc0fd5@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1361.employee02b67c15-9741-47b3-abda-f3b6cfbc0fd5@mock.com",
            "firstName": "Mock 1361",
            "lastName": "Associate 1361"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1142",
      "lastName": "Associate 1142",
      "email": "mock1142.employee8cc31d1e-32c6-4608-b745-4987cbabaa44@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1142.employee8cc31d1e-32c6-4608-b745-4987cbabaa44@mock.com",
            "firstName": "Mock 1142",
            "lastName": "Associate 1142"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1242",
      "lastName": "Associate 1242",
      "email": "mock1242.employeee3d55d62-f2e6-4eee-ae21-0d64248940dd@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1242.employeee3d55d62-f2e6-4eee-ae21-0d64248940dd@mock.com",
            "firstName": "Mock 1242",
            "lastName": "Associate 1242"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1417",
      "lastName": "Associate 1417",
      "email": "mock1417.employee9765bea8-227f-4391-b9c4-f29d21a887a8@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1417.employee9765bea8-227f-4391-b9c4-f29d21a887a8@mock.com",
            "firstName": "Mock 1417",
            "lastName": "Associate 1417"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1032",
      "lastName": "Associate 1032",
      "email": "mock1032.employee5010379e-9088-4692-902d-3d7d119c036b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1032.employee5010379e-9088-4692-902d-3d7d119c036b@mock.com",
            "firstName": "Mock 1032",
            "lastName": "Associate 1032"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1178",
      "lastName": "Associate 1178",
      "email": "mock1178.employee60c6bc8e-acb5-4ef9-a6d3-dfdeefa5d840@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1178.employee60c6bc8e-acb5-4ef9-a6d3-dfdeefa5d840@mock.com",
            "firstName": "Mock 1178",
            "lastName": "Associate 1178"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1050",
      "lastName": "Associate 1050",
      "email": "mock1050.employeefeaffb6e-0185-47a2-bb03-2aa041209341@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1050.employeefeaffb6e-0185-47a2-bb03-2aa041209341@mock.com",
            "firstName": "Mock 1050",
            "lastName": "Associate 1050"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1355",
      "lastName": "Associate 1355",
      "email": "mock1355.employee163de72b-8633-4f86-81ef-fdf854bcce4e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1355.employee163de72b-8633-4f86-81ef-fdf854bcce4e@mock.com",
            "firstName": "Mock 1355",
            "lastName": "Associate 1355"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1192",
      "lastName": "Associate 1192",
      "email": "mock1192.employee921dee07-9f1a-4498-8736-195db93c38f2@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1192.employee921dee07-9f1a-4498-8736-195db93c38f2@mock.com",
            "firstName": "Mock 1192",
            "lastName": "Associate 1192"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1403",
      "lastName": "Associate 1403",
      "email": "mock1403.employee182a1739-22e9-4556-83a2-495f868ec02f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1403.employee182a1739-22e9-4556-83a2-495f868ec02f@mock.com",
            "firstName": "Mock 1403",
            "lastName": "Associate 1403"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1455",
      "lastName": "Associate 1455",
      "email": "mock1455.employeeed3e4002-b5c2-4a10-a1a6-e48bfe506b74@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1455.employeeed3e4002-b5c2-4a10-a1a6-e48bfe506b74@mock.com",
            "firstName": "Mock 1455",
            "lastName": "Associate 1455"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1341",
      "lastName": "Associate 1341",
      "email": "mock1341.employee3cfb2964-3f5d-468a-ac69-c5c0128baabd@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1341.employee3cfb2964-3f5d-468a-ac69-c5c0128baabd@mock.com",
            "firstName": "Mock 1341",
            "lastName": "Associate 1341"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1092",
      "lastName": "Associate 1092",
      "email": "mock1092.employee14ddf2ef-d590-4b91-a485-5ee0d05d8a85@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1092.employee14ddf2ef-d590-4b91-a485-5ee0d05d8a85@mock.com",
            "firstName": "Mock 1092",
            "lastName": "Associate 1092"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1218",
      "lastName": "Associate 1218",
      "email": "mock1218.employee833c4379-bd90-4900-8185-d06c4ff25c1f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1218.employee833c4379-bd90-4900-8185-d06c4ff25c1f@mock.com",
            "firstName": "Mock 1218",
            "lastName": "Associate 1218"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1235",
      "lastName": "Associate 1235",
      "email": "mock1235.employeecf3b4a50-8525-46e7-ad55-082f47e71b26@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1235.employeecf3b4a50-8525-46e7-ad55-082f47e71b26@mock.com",
            "firstName": "Mock 1235",
            "lastName": "Associate 1235"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1335",
      "lastName": "Associate 1335",
      "email": "mock1335.employee6dcf834a-b42d-4245-8fc4-41137611e219@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1335.employee6dcf834a-b42d-4245-8fc4-41137611e219@mock.com",
            "firstName": "Mock 1335",
            "lastName": "Associate 1335"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1013",
      "lastName": "Associate 1013",
      "email": "mock1013.employee40dbf2cc-51e7-4438-bcbe-15bd9ea28c41@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1013.employee40dbf2cc-51e7-4438-bcbe-15bd9ea28c41@mock.com",
            "firstName": "Mock 1013",
            "lastName": "Associate 1013"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1342",
      "lastName": "Associate 1342",
      "email": "mock1342.employee51bbb8fa-e6a0-4960-bcd6-cc2ccc330483@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1342.employee51bbb8fa-e6a0-4960-bcd6-cc2ccc330483@mock.com",
            "firstName": "Mock 1342",
            "lastName": "Associate 1342"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1057",
      "lastName": "Associate 1057",
      "email": "mock1057.employeec7f2a4dd-468d-4486-af97-aa11e0440833@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1057.employeec7f2a4dd-468d-4486-af97-aa11e0440833@mock.com",
            "firstName": "Mock 1057",
            "lastName": "Associate 1057"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1378",
      "lastName": "Associate 1378",
      "email": "mock1378.employee5295fcce-0dd1-432e-ac7b-50b8fe2ea013@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1378.employee5295fcce-0dd1-432e-ac7b-50b8fe2ea013@mock.com",
            "firstName": "Mock 1378",
            "lastName": "Associate 1378"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1149",
      "lastName": "Associate 1149",
      "email": "mock1149.employee33f04781-f4e4-4fb2-a7f4-57aa7f93fcbf@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1149.employee33f04781-f4e4-4fb2-a7f4-57aa7f93fcbf@mock.com",
            "firstName": "Mock 1149",
            "lastName": "Associate 1149"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1085",
      "lastName": "Associate 1085",
      "email": "mock1085.employee188f06c0-006e-4a39-968c-07eb6cadd094@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1085.employee188f06c0-006e-4a39-968c-07eb6cadd094@mock.com",
            "firstName": "Mock 1085",
            "lastName": "Associate 1085"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1313",
      "lastName": "Associate 1313",
      "email": "mock1313.employee5ed69935-008d-42d2-b12a-a076f16f6205@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1313.employee5ed69935-008d-42d2-b12a-a076f16f6205@mock.com",
            "firstName": "Mock 1313",
            "lastName": "Associate 1313"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1106",
      "lastName": "Associate 1106",
      "email": "mock1106.employeec5aee9d0-e07b-4200-9844-01229b4ff4b6@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1106.employeec5aee9d0-e07b-4200-9844-01229b4ff4b6@mock.com",
            "firstName": "Mock 1106",
            "lastName": "Associate 1106"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1475",
      "lastName": "Associate 1475",
      "email": "mock1475.employee1d768fd8-1f70-4872-88c0-64378944df02@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1475.employee1d768fd8-1f70-4872-88c0-64378944df02@mock.com",
            "firstName": "Mock 1475",
            "lastName": "Associate 1475"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1022",
      "lastName": "Associate 1022",
      "email": "mock1022.employee4cb737ff-0b54-404c-ae3a-cf97f4c870ee@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1022.employee4cb737ff-0b54-404c-ae3a-cf97f4c870ee@mock.com",
            "firstName": "Mock 1022",
            "lastName": "Associate 1022"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1456",
      "lastName": "Associate 1456",
      "email": "mock1456.employeef39ed8e2-8f2b-4c85-94e3-0f3533824e96@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1456.employeef39ed8e2-8f2b-4c85-94e3-0f3533824e96@mock.com",
            "firstName": "Mock 1456",
            "lastName": "Associate 1456"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1033",
      "lastName": "Associate 1033",
      "email": "mock1033.employeeadc48c44-08a8-49cd-86ac-67c1105cafaf@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1033.employeeadc48c44-08a8-49cd-86ac-67c1105cafaf@mock.com",
            "firstName": "Mock 1033",
            "lastName": "Associate 1033"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1432",
      "lastName": "Associate 1432",
      "email": "mock1432.employee22a427f2-498b-4206-9f7a-2faeaa377f47@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1432.employee22a427f2-498b-4206-9f7a-2faeaa377f47@mock.com",
            "firstName": "Mock 1432",
            "lastName": "Associate 1432"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1499",
      "lastName": "Associate 1499",
      "email": "mock1499.employee90580fb8-5af8-40ad-b60a-4701d166d0d3@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1499.employee90580fb8-5af8-40ad-b60a-4701d166d0d3@mock.com",
            "firstName": "Mock 1499",
            "lastName": "Associate 1499"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1376",
      "lastName": "Associate 1376",
      "email": "mock1376.employee428a7913-e458-41e7-ae96-23d892a2b104@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1376.employee428a7913-e458-41e7-ae96-23d892a2b104@mock.com",
            "firstName": "Mock 1376",
            "lastName": "Associate 1376"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1428",
      "lastName": "Associate 1428",
      "email": "mock1428.employeefb39b916-dab4-4c0a-b564-3dfd3041d0cf@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1428.employeefb39b916-dab4-4c0a-b564-3dfd3041d0cf@mock.com",
            "firstName": "Mock 1428",
            "lastName": "Associate 1428"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1023",
      "lastName": "Associate 1023",
      "email": "mock1023.employeee9c719a4-21e0-48cc-8ac6-11f032de4c70@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1023.employeee9c719a4-21e0-48cc-8ac6-11f032de4c70@mock.com",
            "firstName": "Mock 1023",
            "lastName": "Associate 1023"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1047",
      "lastName": "Associate 1047",
      "email": "mock1047.employee2b7f6b27-c27f-4c68-b7a6-dd2b96693d09@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1047.employee2b7f6b27-c27f-4c68-b7a6-dd2b96693d09@mock.com",
            "firstName": "Mock 1047",
            "lastName": "Associate 1047"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1326",
      "lastName": "Associate 1326",
      "email": "mock1326.employeea0f6f937-bb03-45f8-adfc-ab5754158433@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1326.employeea0f6f937-bb03-45f8-adfc-ab5754158433@mock.com",
            "firstName": "Mock 1326",
            "lastName": "Associate 1326"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1423",
      "lastName": "Associate 1423",
      "email": "mock1423.employee6f86e2dc-db83-448a-a135-a8227908fcca@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1423.employee6f86e2dc-db83-448a-a135-a8227908fcca@mock.com",
            "firstName": "Mock 1423",
            "lastName": "Associate 1423"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1124",
      "lastName": "Associate 1124",
      "email": "mock1124.employeec286fb14-fccd-4fd6-90c8-f50dbd8e778d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1124.employeec286fb14-fccd-4fd6-90c8-f50dbd8e778d@mock.com",
            "firstName": "Mock 1124",
            "lastName": "Associate 1124"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1470",
      "lastName": "Associate 1470",
      "email": "mock1470.employee3516e0d1-3c8c-4c67-bda8-823ba04eebf4@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1470.employee3516e0d1-3c8c-4c67-bda8-823ba04eebf4@mock.com",
            "firstName": "Mock 1470",
            "lastName": "Associate 1470"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1298",
      "lastName": "Associate 1298",
      "email": "mock1298.employee97e0350f-6e64-4e59-9852-01b32134f5c8@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1298.employee97e0350f-6e64-4e59-9852-01b32134f5c8@mock.com",
            "firstName": "Mock 1298",
            "lastName": "Associate 1298"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1135",
      "lastName": "Associate 1135",
      "email": "mock1135.employeec261e9ed-9d08-42c8-921e-287ea7d8b16d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1135.employeec261e9ed-9d08-42c8-921e-287ea7d8b16d@mock.com",
            "firstName": "Mock 1135",
            "lastName": "Associate 1135"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1274",
      "lastName": "Associate 1274",
      "email": "mock1274.employee14fb4c2c-596c-4c7f-bc33-2c7c54fe6098@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1274.employee14fb4c2c-596c-4c7f-bc33-2c7c54fe6098@mock.com",
            "firstName": "Mock 1274",
            "lastName": "Associate 1274"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1334",
      "lastName": "Associate 1334",
      "email": "mock1334.employee40866613-f787-41ea-9856-d1443168bc70@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1334.employee40866613-f787-41ea-9856-d1443168bc70@mock.com",
            "firstName": "Mock 1334",
            "lastName": "Associate 1334"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1465",
      "lastName": "Associate 1465",
      "email": "mock1465.employeea0808b6e-708a-486e-9f38-02b55f99d8c0@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1465.employeea0808b6e-708a-486e-9f38-02b55f99d8c0@mock.com",
            "firstName": "Mock 1465",
            "lastName": "Associate 1465"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1445",
      "lastName": "Associate 1445",
      "email": "mock1445.employee8d37aa67-43ac-462f-b2c2-563d4a39ace2@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1445.employee8d37aa67-43ac-462f-b2c2-563d4a39ace2@mock.com",
            "firstName": "Mock 1445",
            "lastName": "Associate 1445"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1362",
      "lastName": "Associate 1362",
      "email": "mock1362.employeefd680268-4a57-4376-a8e7-959ccc9f209f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1362.employeefd680268-4a57-4376-a8e7-959ccc9f209f@mock.com",
            "firstName": "Mock 1362",
            "lastName": "Associate 1362"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1034",
      "lastName": "Associate 1034",
      "email": "mock1034.employeec35b6977-f051-4687-b798-73645defa776@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1034.employeec35b6977-f051-4687-b798-73645defa776@mock.com",
            "firstName": "Mock 1034",
            "lastName": "Associate 1034"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1436",
      "lastName": "Associate 1436",
      "email": "mock1436.employee030c32ef-cd36-4c6a-ab83-7fd34f436578@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1436.employee030c32ef-cd36-4c6a-ab83-7fd34f436578@mock.com",
            "firstName": "Mock 1436",
            "lastName": "Associate 1436"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1262",
      "lastName": "Associate 1262",
      "email": "mock1262.employeecb67de52-d2df-4b93-8781-682a0fd4b56e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1262.employeecb67de52-d2df-4b93-8781-682a0fd4b56e@mock.com",
            "firstName": "Mock 1262",
            "lastName": "Associate 1262"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1116",
      "lastName": "Associate 1116",
      "email": "mock1116.employeead693b68-4023-4ddd-97c1-e3d443fbb162@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1116.employeead693b68-4023-4ddd-97c1-e3d443fbb162@mock.com",
            "firstName": "Mock 1116",
            "lastName": "Associate 1116"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1010",
      "lastName": "Associate 1010",
      "email": "mock1010.employee7bf5d7f8-9916-46f0-b2ab-dc249fe6fad2@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1010.employee7bf5d7f8-9916-46f0-b2ab-dc249fe6fad2@mock.com",
            "firstName": "Mock 1010",
            "lastName": "Associate 1010"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1248",
      "lastName": "Associate 1248",
      "email": "mock1248.employeeb14f9d73-b2c2-4f02-8161-7c149a1e2692@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1248.employeeb14f9d73-b2c2-4f02-8161-7c149a1e2692@mock.com",
            "firstName": "Mock 1248",
            "lastName": "Associate 1248"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1019",
      "lastName": "Associate 1019",
      "email": "mock1019.employee8a437635-8c26-4487-baab-c68e530218d2@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1019.employee8a437635-8c26-4487-baab-c68e530218d2@mock.com",
            "firstName": "Mock 1019",
            "lastName": "Associate 1019"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1389",
      "lastName": "Associate 1389",
      "email": "mock1389.employeeb23884a7-1549-460f-ad24-4f8372f43373@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1389.employeeb23884a7-1549-460f-ad24-4f8372f43373@mock.com",
            "firstName": "Mock 1389",
            "lastName": "Associate 1389"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1486",
      "lastName": "Associate 1486",
      "email": "mock1486.employee88121e69-3519-4420-8faf-d7fa63117e9b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1486.employee88121e69-3519-4420-8faf-d7fa63117e9b@mock.com",
            "firstName": "Mock 1486",
            "lastName": "Associate 1486"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1203",
      "lastName": "Associate 1203",
      "email": "mock1203.employee983b1341-6c2c-4977-bb8c-fde564f6b501@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1203.employee983b1341-6c2c-4977-bb8c-fde564f6b501@mock.com",
            "firstName": "Mock 1203",
            "lastName": "Associate 1203"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1194",
      "lastName": "Associate 1194",
      "email": "mock1194.employeee93c1f90-1b03-45a3-b059-17b69876733f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1194.employeee93c1f90-1b03-45a3-b059-17b69876733f@mock.com",
            "firstName": "Mock 1194",
            "lastName": "Associate 1194"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1370",
      "lastName": "Associate 1370",
      "email": "mock1370.employeebf963ea4-4dea-483a-a7f7-1553a4193bf7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1370.employeebf963ea4-4dea-483a-a7f7-1553a4193bf7@mock.com",
            "firstName": "Mock 1370",
            "lastName": "Associate 1370"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1127",
      "lastName": "Associate 1127",
      "email": "mock1127.employeef7bed30f-0398-4663-b226-a0f314093468@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1127.employeef7bed30f-0398-4663-b226-a0f314093468@mock.com",
            "firstName": "Mock 1127",
            "lastName": "Associate 1127"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1220",
      "lastName": "Associate 1220",
      "email": "mock1220.employee314b190d-77aa-481e-ae1e-0ee662cf69d9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1220.employee314b190d-77aa-481e-ae1e-0ee662cf69d9@mock.com",
            "firstName": "Mock 1220",
            "lastName": "Associate 1220"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1406",
      "lastName": "Associate 1406",
      "email": "mock1406.employeeb62de554-5d09-471c-80b3-6b5e203f697f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1406.employeeb62de554-5d09-471c-80b3-6b5e203f697f@mock.com",
            "firstName": "Mock 1406",
            "lastName": "Associate 1406"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1327",
      "lastName": "Associate 1327",
      "email": "mock1327.employee13b5c9b1-6d00-4f2a-8030-c69b78a06408@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1327.employee13b5c9b1-6d00-4f2a-8030-c69b78a06408@mock.com",
            "firstName": "Mock 1327",
            "lastName": "Associate 1327"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1497",
      "lastName": "Associate 1497",
      "email": "mock1497.employee97b8dd47-4b66-4abf-b643-cda52765fc7f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1497.employee97b8dd47-4b66-4abf-b643-cda52765fc7f@mock.com",
            "firstName": "Mock 1497",
            "lastName": "Associate 1497"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1345",
      "lastName": "Associate 1345",
      "email": "mock1345.employee5d3f5019-f643-4c8a-a0dd-feb567dec759@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1345.employee5d3f5019-f643-4c8a-a0dd-feb567dec759@mock.com",
            "firstName": "Mock 1345",
            "lastName": "Associate 1345"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1408",
      "lastName": "Associate 1408",
      "email": "mock1408.employee5d5f58e0-d035-4ad5-b20a-c59c07bae8f1@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1408.employee5d5f58e0-d035-4ad5-b20a-c59c07bae8f1@mock.com",
            "firstName": "Mock 1408",
            "lastName": "Associate 1408"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1186",
      "lastName": "Associate 1186",
      "email": "mock1186.employeee49c25fc-680c-4b02-843f-a59e3f52eb09@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1186.employeee49c25fc-680c-4b02-843f-a59e3f52eb09@mock.com",
            "firstName": "Mock 1186",
            "lastName": "Associate 1186"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1365",
      "lastName": "Associate 1365",
      "email": "mock1365.employee8e639871-2a87-4ced-8050-35afcf2b90d7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1365.employee8e639871-2a87-4ced-8050-35afcf2b90d7@mock.com",
            "firstName": "Mock 1365",
            "lastName": "Associate 1365"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1410",
      "lastName": "Associate 1410",
      "email": "mock1410.employeecf94d7d4-07bc-4482-b7b2-92f27b46bef2@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1410.employeecf94d7d4-07bc-4482-b7b2-92f27b46bef2@mock.com",
            "firstName": "Mock 1410",
            "lastName": "Associate 1410"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1046",
      "lastName": "Associate 1046",
      "email": "mock1046.employee4140e070-83e4-46d5-903e-7f46fb7ed6cf@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1046.employee4140e070-83e4-46d5-903e-7f46fb7ed6cf@mock.com",
            "firstName": "Mock 1046",
            "lastName": "Associate 1046"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1200",
      "lastName": "Associate 1200",
      "email": "mock1200.employeecace26c0-3437-44f8-bcf1-104ec7592d35@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1200.employeecace26c0-3437-44f8-bcf1-104ec7592d35@mock.com",
            "firstName": "Mock 1200",
            "lastName": "Associate 1200"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1333",
      "lastName": "Associate 1333",
      "email": "mock1333.employee8d40b827-daad-4b1d-964d-799a329f3bf9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1333.employee8d40b827-daad-4b1d-964d-799a329f3bf9@mock.com",
            "firstName": "Mock 1333",
            "lastName": "Associate 1333"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1387",
      "lastName": "Associate 1387",
      "email": "mock1387.employee610dfa5a-1d08-4d9e-8182-370b0b52f795@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1387.employee610dfa5a-1d08-4d9e-8182-370b0b52f795@mock.com",
            "firstName": "Mock 1387",
            "lastName": "Associate 1387"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1055",
      "lastName": "Associate 1055",
      "email": "mock1055.employee3af5835f-4602-4cb0-a795-976334f5eaa4@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1055.employee3af5835f-4602-4cb0-a795-976334f5eaa4@mock.com",
            "firstName": "Mock 1055",
            "lastName": "Associate 1055"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1070",
      "lastName": "Associate 1070",
      "email": "mock1070.employee96a4e3f8-c3ed-4953-baab-dfec4f4e57a4@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1070.employee96a4e3f8-c3ed-4953-baab-dfec4f4e57a4@mock.com",
            "firstName": "Mock 1070",
            "lastName": "Associate 1070"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1328",
      "lastName": "Associate 1328",
      "email": "mock1328.employee1c01c4c3-a114-4892-9f5d-c6b7816d7f83@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1328.employee1c01c4c3-a114-4892-9f5d-c6b7816d7f83@mock.com",
            "firstName": "Mock 1328",
            "lastName": "Associate 1328"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1419",
      "lastName": "Associate 1419",
      "email": "mock1419.employee6f111c37-383a-471b-915b-a53fdbcaa2ec@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1419.employee6f111c37-383a-471b-915b-a53fdbcaa2ec@mock.com",
            "firstName": "Mock 1419",
            "lastName": "Associate 1419"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1038",
      "lastName": "Associate 1038",
      "email": "mock1038.employeebd20e2a2-d9c0-4476-b551-1b902f257f08@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1038.employeebd20e2a2-d9c0-4476-b551-1b902f257f08@mock.com",
            "firstName": "Mock 1038",
            "lastName": "Associate 1038"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1482",
      "lastName": "Associate 1482",
      "email": "mock1482.employee853ceea7-c46b-4b2b-afc9-6f6dd07fc147@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1482.employee853ceea7-c46b-4b2b-afc9-6f6dd07fc147@mock.com",
            "firstName": "Mock 1482",
            "lastName": "Associate 1482"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1095",
      "lastName": "Associate 1095",
      "email": "mock1095.employeed1dae405-a707-4c11-8625-4fbf102ec1b4@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1095.employeed1dae405-a707-4c11-8625-4fbf102ec1b4@mock.com",
            "firstName": "Mock 1095",
            "lastName": "Associate 1095"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1134",
      "lastName": "Associate 1134",
      "email": "mock1134.employee4220b69c-dd6e-4413-b587-170e56dd4e15@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1134.employee4220b69c-dd6e-4413-b587-170e56dd4e15@mock.com",
            "firstName": "Mock 1134",
            "lastName": "Associate 1134"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1438",
      "lastName": "Associate 1438",
      "email": "mock1438.employeef7da6543-8fb8-4571-be51-be999b0b222b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1438.employeef7da6543-8fb8-4571-be51-be999b0b222b@mock.com",
            "firstName": "Mock 1438",
            "lastName": "Associate 1438"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1130",
      "lastName": "Associate 1130",
      "email": "mock1130.employee0764773a-b1bb-4c4b-994c-c223229a2dd7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1130.employee0764773a-b1bb-4c4b-994c-c223229a2dd7@mock.com",
            "firstName": "Mock 1130",
            "lastName": "Associate 1130"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1190",
      "lastName": "Associate 1190",
      "email": "mock1190.employee38766ade-f548-48fb-ac71-1b95ed391c2b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1190.employee38766ade-f548-48fb-ac71-1b95ed391c2b@mock.com",
            "firstName": "Mock 1190",
            "lastName": "Associate 1190"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1173",
      "lastName": "Associate 1173",
      "email": "mock1173.employeee9b85279-57d5-48a7-b85f-06609b6c01b6@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1173.employeee9b85279-57d5-48a7-b85f-06609b6c01b6@mock.com",
            "firstName": "Mock 1173",
            "lastName": "Associate 1173"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1182",
      "lastName": "Associate 1182",
      "email": "mock1182.employee884f79a0-3d56-4427-b82d-332859266695@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1182.employee884f79a0-3d56-4427-b82d-332859266695@mock.com",
            "firstName": "Mock 1182",
            "lastName": "Associate 1182"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1151",
      "lastName": "Associate 1151",
      "email": "mock1151.employee2faaa8b2-dc03-42ff-9fc0-8407cdf246b8@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1151.employee2faaa8b2-dc03-42ff-9fc0-8407cdf246b8@mock.com",
            "firstName": "Mock 1151",
            "lastName": "Associate 1151"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1089",
      "lastName": "Associate 1089",
      "email": "mock1089.employeedae490df-3e75-4987-98f0-9962b295c4da@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1089.employeedae490df-3e75-4987-98f0-9962b295c4da@mock.com",
            "firstName": "Mock 1089",
            "lastName": "Associate 1089"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1185",
      "lastName": "Associate 1185",
      "email": "mock1185.employee36a78d9c-5b17-4da9-ae3a-9fe18ce3468b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1185.employee36a78d9c-5b17-4da9-ae3a-9fe18ce3468b@mock.com",
            "firstName": "Mock 1185",
            "lastName": "Associate 1185"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1247",
      "lastName": "Associate 1247",
      "email": "mock1247.employee12b2a09d-9d9e-465c-8171-5366d6c6c63c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1247.employee12b2a09d-9d9e-465c-8171-5366d6c6c63c@mock.com",
            "firstName": "Mock 1247",
            "lastName": "Associate 1247"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1261",
      "lastName": "Associate 1261",
      "email": "mock1261.employee6d1f15d2-9e85-45ac-a14b-a4b9e577dc30@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1261.employee6d1f15d2-9e85-45ac-a14b-a4b9e577dc30@mock.com",
            "firstName": "Mock 1261",
            "lastName": "Associate 1261"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1373",
      "lastName": "Associate 1373",
      "email": "mock1373.employee443e91c7-677f-46f2-aefc-3d362c93f4dd@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1373.employee443e91c7-677f-46f2-aefc-3d362c93f4dd@mock.com",
            "firstName": "Mock 1373",
            "lastName": "Associate 1373"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1381",
      "lastName": "Associate 1381",
      "email": "mock1381.employee5dcf7fc8-a2fa-4d64-b627-ef294e80584e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1381.employee5dcf7fc8-a2fa-4d64-b627-ef294e80584e@mock.com",
            "firstName": "Mock 1381",
            "lastName": "Associate 1381"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1126",
      "lastName": "Associate 1126",
      "email": "mock1126.employee074e5336-e270-4737-aebb-0982c244fabc@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1126.employee074e5336-e270-4737-aebb-0982c244fabc@mock.com",
            "firstName": "Mock 1126",
            "lastName": "Associate 1126"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1286",
      "lastName": "Associate 1286",
      "email": "mock1286.employee2747b103-fb32-4c25-a1aa-25aa95897740@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1286.employee2747b103-fb32-4c25-a1aa-25aa95897740@mock.com",
            "firstName": "Mock 1286",
            "lastName": "Associate 1286"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1402",
      "lastName": "Associate 1402",
      "email": "mock1402.employee2d6c2b69-2944-4086-be37-7dd588c3e661@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1402.employee2d6c2b69-2944-4086-be37-7dd588c3e661@mock.com",
            "firstName": "Mock 1402",
            "lastName": "Associate 1402"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1113",
      "lastName": "Associate 1113",
      "email": "mock1113.employeeda7808a3-ff01-4940-8f01-5ed7b81470c6@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1113.employeeda7808a3-ff01-4940-8f01-5ed7b81470c6@mock.com",
            "firstName": "Mock 1113",
            "lastName": "Associate 1113"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1257",
      "lastName": "Associate 1257",
      "email": "mock1257.employee2ff67725-3678-4009-aecb-da6666f565d9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1257.employee2ff67725-3678-4009-aecb-da6666f565d9@mock.com",
            "firstName": "Mock 1257",
            "lastName": "Associate 1257"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1125",
      "lastName": "Associate 1125",
      "email": "mock1125.employee72d55946-6a71-4d89-a2d9-82291a4e39cc@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1125.employee72d55946-6a71-4d89-a2d9-82291a4e39cc@mock.com",
            "firstName": "Mock 1125",
            "lastName": "Associate 1125"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1060",
      "lastName": "Associate 1060",
      "email": "mock1060.employee8c9c816b-9fb6-45bb-b6e9-1415d9f01bd6@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1060.employee8c9c816b-9fb6-45bb-b6e9-1415d9f01bd6@mock.com",
            "firstName": "Mock 1060",
            "lastName": "Associate 1060"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1367",
      "lastName": "Associate 1367",
      "email": "mock1367.employee8b221bc1-4f14-4cc9-a3d5-e3134a3074f1@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1367.employee8b221bc1-4f14-4cc9-a3d5-e3134a3074f1@mock.com",
            "firstName": "Mock 1367",
            "lastName": "Associate 1367"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1279",
      "lastName": "Associate 1279",
      "email": "mock1279.employee3ed71d05-80c5-400c-9d89-a7ef5fa6cddb@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1279.employee3ed71d05-80c5-400c-9d89-a7ef5fa6cddb@mock.com",
            "firstName": "Mock 1279",
            "lastName": "Associate 1279"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1371",
      "lastName": "Associate 1371",
      "email": "mock1371.employee21b52a6f-9e54-4391-87f7-53ac95752721@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1371.employee21b52a6f-9e54-4391-87f7-53ac95752721@mock.com",
            "firstName": "Mock 1371",
            "lastName": "Associate 1371"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1039",
      "lastName": "Associate 1039",
      "email": "mock1039.employeea36b54e7-0166-4e46-acef-95ac606b3a42@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1039.employeea36b54e7-0166-4e46-acef-95ac606b3a42@mock.com",
            "firstName": "Mock 1039",
            "lastName": "Associate 1039"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1222",
      "lastName": "Associate 1222",
      "email": "mock1222.employee7600d24d-abad-44ac-b22a-80b7a77eecff@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1222.employee7600d24d-abad-44ac-b22a-80b7a77eecff@mock.com",
            "firstName": "Mock 1222",
            "lastName": "Associate 1222"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1121",
      "lastName": "Associate 1121",
      "email": "mock1121.employeedd9cc390-9135-4377-b51a-df940109eccb@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1121.employeedd9cc390-9135-4377-b51a-df940109eccb@mock.com",
            "firstName": "Mock 1121",
            "lastName": "Associate 1121"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1152",
      "lastName": "Associate 1152",
      "email": "mock1152.employeecdca0a61-654a-4ca5-83fc-588c43d0883e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1152.employeecdca0a61-654a-4ca5-83fc-588c43d0883e@mock.com",
            "firstName": "Mock 1152",
            "lastName": "Associate 1152"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1011",
      "lastName": "Associate 1011",
      "email": "mock1011.employeee77ec2a4-9b15-4373-a4a7-95f0a0e71cb3@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1011.employeee77ec2a4-9b15-4373-a4a7-95f0a0e71cb3@mock.com",
            "firstName": "Mock 1011",
            "lastName": "Associate 1011"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1307",
      "lastName": "Associate 1307",
      "email": "mock1307.employeeb0649e33-aa14-4cfc-8821-8956193f0d5d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1307.employeeb0649e33-aa14-4cfc-8821-8956193f0d5d@mock.com",
            "firstName": "Mock 1307",
            "lastName": "Associate 1307"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1488",
      "lastName": "Associate 1488",
      "email": "mock1488.employee0484aa49-cfa2-41c1-ac9d-f2805cdf0edf@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1488.employee0484aa49-cfa2-41c1-ac9d-f2805cdf0edf@mock.com",
            "firstName": "Mock 1488",
            "lastName": "Associate 1488"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1181",
      "lastName": "Associate 1181",
      "email": "mock1181.employeef61aab8f-81bb-4161-8efc-ec6cc126415e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1181.employeef61aab8f-81bb-4161-8efc-ec6cc126415e@mock.com",
            "firstName": "Mock 1181",
            "lastName": "Associate 1181"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1238",
      "lastName": "Associate 1238",
      "email": "mock1238.employeef68c8266-5bb4-488a-8b00-e4c40c7f8fcd@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1238.employeef68c8266-5bb4-488a-8b00-e4c40c7f8fcd@mock.com",
            "firstName": "Mock 1238",
            "lastName": "Associate 1238"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1157",
      "lastName": "Associate 1157",
      "email": "mock1157.employeec8092671-29e3-41b9-8420-06c7a56fae28@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1157.employeec8092671-29e3-41b9-8420-06c7a56fae28@mock.com",
            "firstName": "Mock 1157",
            "lastName": "Associate 1157"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1172",
      "lastName": "Associate 1172",
      "email": "mock1172.employee397a0728-3dbd-4566-ba6c-6a0a5bd9717d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1172.employee397a0728-3dbd-4566-ba6c-6a0a5bd9717d@mock.com",
            "firstName": "Mock 1172",
            "lastName": "Associate 1172"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1234",
      "lastName": "Associate 1234",
      "email": "mock1234.employee84d626c1-622c-4ee0-ac34-6e1ffca8d6b9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1234.employee84d626c1-622c-4ee0-ac34-6e1ffca8d6b9@mock.com",
            "firstName": "Mock 1234",
            "lastName": "Associate 1234"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1100",
      "lastName": "Associate 1100",
      "email": "mock1100.employeed627861f-4229-43fc-b768-68b3d7474dcf@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1100.employeed627861f-4229-43fc-b768-68b3d7474dcf@mock.com",
            "firstName": "Mock 1100",
            "lastName": "Associate 1100"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1430",
      "lastName": "Associate 1430",
      "email": "mock1430.employee96df4c22-d22b-4f24-acf1-305d2ea4ed6d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1430.employee96df4c22-d22b-4f24-acf1-305d2ea4ed6d@mock.com",
            "firstName": "Mock 1430",
            "lastName": "Associate 1430"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1418",
      "lastName": "Associate 1418",
      "email": "mock1418.employee013a4cde-7320-479b-b985-dc2c0bd0116f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1418.employee013a4cde-7320-479b-b985-dc2c0bd0116f@mock.com",
            "firstName": "Mock 1418",
            "lastName": "Associate 1418"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1311",
      "lastName": "Associate 1311",
      "email": "mock1311.employee4745259f-25b9-40d2-8c31-9a92c3d80795@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1311.employee4745259f-25b9-40d2-8c31-9a92c3d80795@mock.com",
            "firstName": "Mock 1311",
            "lastName": "Associate 1311"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1382",
      "lastName": "Associate 1382",
      "email": "mock1382.employeef6f3c99e-18fa-45ff-a434-f83dac8160cd@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1382.employeef6f3c99e-18fa-45ff-a434-f83dac8160cd@mock.com",
            "firstName": "Mock 1382",
            "lastName": "Associate 1382"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1401",
      "lastName": "Associate 1401",
      "email": "mock1401.employee2b5f55e7-7dc2-42ba-bc13-d7af8eb11ebe@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1401.employee2b5f55e7-7dc2-42ba-bc13-d7af8eb11ebe@mock.com",
            "firstName": "Mock 1401",
            "lastName": "Associate 1401"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1202",
      "lastName": "Associate 1202",
      "email": "mock1202.employee4625b165-1a05-4bf5-a8cd-25fde0d25df7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1202.employee4625b165-1a05-4bf5-a8cd-25fde0d25df7@mock.com",
            "firstName": "Mock 1202",
            "lastName": "Associate 1202"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1263",
      "lastName": "Associate 1263",
      "email": "mock1263.employee3e9d7d88-6b1c-4ae4-b408-96173ac006f7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1263.employee3e9d7d88-6b1c-4ae4-b408-96173ac006f7@mock.com",
            "firstName": "Mock 1263",
            "lastName": "Associate 1263"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1320",
      "lastName": "Associate 1320",
      "email": "mock1320.employee50eadfd5-9d6f-495b-8326-4b75745f55e8@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1320.employee50eadfd5-9d6f-495b-8326-4b75745f55e8@mock.com",
            "firstName": "Mock 1320",
            "lastName": "Associate 1320"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1346",
      "lastName": "Associate 1346",
      "email": "mock1346.employee5e8e6662-26c4-4874-8ff1-90d347221035@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1346.employee5e8e6662-26c4-4874-8ff1-90d347221035@mock.com",
            "firstName": "Mock 1346",
            "lastName": "Associate 1346"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1331",
      "lastName": "Associate 1331",
      "email": "mock1331.employee821a249a-b698-496e-be42-95deea86ce62@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1331.employee821a249a-b698-496e-be42-95deea86ce62@mock.com",
            "firstName": "Mock 1331",
            "lastName": "Associate 1331"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1468",
      "lastName": "Associate 1468",
      "email": "mock1468.employeede296aa2-8b2e-4e63-b546-58ae3b623657@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1468.employeede296aa2-8b2e-4e63-b546-58ae3b623657@mock.com",
            "firstName": "Mock 1468",
            "lastName": "Associate 1468"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1462",
      "lastName": "Associate 1462",
      "email": "mock1462.employee51b92785-b5a8-483e-ac05-25efe74d139d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1462.employee51b92785-b5a8-483e-ac05-25efe74d139d@mock.com",
            "firstName": "Mock 1462",
            "lastName": "Associate 1462"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1082",
      "lastName": "Associate 1082",
      "email": "mock1082.employeea6119e28-136c-46b0-a213-1a61f8b9a681@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1082.employeea6119e28-136c-46b0-a213-1a61f8b9a681@mock.com",
            "firstName": "Mock 1082",
            "lastName": "Associate 1082"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1483",
      "lastName": "Associate 1483",
      "email": "mock1483.employee5d53de33-749c-4e05-9ed8-e3c5c44c95e2@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1483.employee5d53de33-749c-4e05-9ed8-e3c5c44c95e2@mock.com",
            "firstName": "Mock 1483",
            "lastName": "Associate 1483"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1258",
      "lastName": "Associate 1258",
      "email": "mock1258.employeecd0741f5-5e50-4d1a-aa74-35be32128026@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1258.employeecd0741f5-5e50-4d1a-aa74-35be32128026@mock.com",
            "firstName": "Mock 1258",
            "lastName": "Associate 1258"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1293",
      "lastName": "Associate 1293",
      "email": "mock1293.employeed4d1657e-9bfc-446d-900c-5454ae2856c1@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1293.employeed4d1657e-9bfc-446d-900c-5454ae2856c1@mock.com",
            "firstName": "Mock 1293",
            "lastName": "Associate 1293"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1269",
      "lastName": "Associate 1269",
      "email": "mock1269.employee82670f21-42fe-4936-b949-9bb40b991d97@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1269.employee82670f21-42fe-4936-b949-9bb40b991d97@mock.com",
            "firstName": "Mock 1269",
            "lastName": "Associate 1269"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1296",
      "lastName": "Associate 1296",
      "email": "mock1296.employeed78ee189-f454-4758-bdce-77d263920fce@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1296.employeed78ee189-f454-4758-bdce-77d263920fce@mock.com",
            "firstName": "Mock 1296",
            "lastName": "Associate 1296"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1271",
      "lastName": "Associate 1271",
      "email": "mock1271.employee728d027e-6af3-40b7-8bc0-abb195a0e6d4@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1271.employee728d027e-6af3-40b7-8bc0-abb195a0e6d4@mock.com",
            "firstName": "Mock 1271",
            "lastName": "Associate 1271"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1256",
      "lastName": "Associate 1256",
      "email": "mock1256.employee47a8f961-c9f4-49a6-929b-4f7746077b7d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1256.employee47a8f961-c9f4-49a6-929b-4f7746077b7d@mock.com",
            "firstName": "Mock 1256",
            "lastName": "Associate 1256"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1139",
      "lastName": "Associate 1139",
      "email": "mock1139.employeee2e3e094-659e-49d6-b98f-7c439231d505@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1139.employeee2e3e094-659e-49d6-b98f-7c439231d505@mock.com",
            "firstName": "Mock 1139",
            "lastName": "Associate 1139"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1337",
      "lastName": "Associate 1337",
      "email": "mock1337.employeee100bd81-04c5-4768-9877-7b8b538acae8@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1337.employeee100bd81-04c5-4768-9877-7b8b538acae8@mock.com",
            "firstName": "Mock 1337",
            "lastName": "Associate 1337"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1477",
      "lastName": "Associate 1477",
      "email": "mock1477.employeeb2ab8337-0b05-4b7c-8f22-0353e3c8bcc3@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1477.employeeb2ab8337-0b05-4b7c-8f22-0353e3c8bcc3@mock.com",
            "firstName": "Mock 1477",
            "lastName": "Associate 1477"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1007",
      "lastName": "Associate 1007",
      "email": "mock1007.employee95347ccb-2d88-4210-83fe-cc430d2c36cf@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1007.employee95347ccb-2d88-4210-83fe-cc430d2c36cf@mock.com",
            "firstName": "Mock 1007",
            "lastName": "Associate 1007"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1175",
      "lastName": "Associate 1175",
      "email": "mock1175.employee738afde3-fcd5-4252-b302-ff94b6b70752@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1175.employee738afde3-fcd5-4252-b302-ff94b6b70752@mock.com",
            "firstName": "Mock 1175",
            "lastName": "Associate 1175"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1283",
      "lastName": "Associate 1283",
      "email": "mock1283.employeea8c98fd4-dd1e-426b-9ffb-7ee4f4abefd6@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1283.employeea8c98fd4-dd1e-426b-9ffb-7ee4f4abefd6@mock.com",
            "firstName": "Mock 1283",
            "lastName": "Associate 1283"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1496",
      "lastName": "Associate 1496",
      "email": "mock1496.employee52d30683-d328-41cd-81c3-e40d88cf6a1d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1496.employee52d30683-d328-41cd-81c3-e40d88cf6a1d@mock.com",
            "firstName": "Mock 1496",
            "lastName": "Associate 1496"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1099",
      "lastName": "Associate 1099",
      "email": "mock1099.employeeed177d70-484e-4452-831f-fcdf6d4d16f2@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1099.employeeed177d70-484e-4452-831f-fcdf6d4d16f2@mock.com",
            "firstName": "Mock 1099",
            "lastName": "Associate 1099"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1045",
      "lastName": "Associate 1045",
      "email": "mock1045.employee47b0d06d-bc12-4bfb-9a3c-c55020f585e2@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1045.employee47b0d06d-bc12-4bfb-9a3c-c55020f585e2@mock.com",
            "firstName": "Mock 1045",
            "lastName": "Associate 1045"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1243",
      "lastName": "Associate 1243",
      "email": "mock1243.employeef3f6b37b-e06e-4971-b592-a650edec96e1@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1243.employeef3f6b37b-e06e-4971-b592-a650edec96e1@mock.com",
            "firstName": "Mock 1243",
            "lastName": "Associate 1243"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1075",
      "lastName": "Associate 1075",
      "email": "mock1075.employee8daedfda-8fbd-4936-a9f3-a17b0c3a947c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1075.employee8daedfda-8fbd-4936-a9f3-a17b0c3a947c@mock.com",
            "firstName": "Mock 1075",
            "lastName": "Associate 1075"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1225",
      "lastName": "Associate 1225",
      "email": "mock1225.employee05de47ec-d17f-451d-83c5-4f88429150cf@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1225.employee05de47ec-d17f-451d-83c5-4f88429150cf@mock.com",
            "firstName": "Mock 1225",
            "lastName": "Associate 1225"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1467",
      "lastName": "Associate 1467",
      "email": "mock1467.employee22d73aa3-1673-40f5-8136-5914a65c6b28@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1467.employee22d73aa3-1673-40f5-8136-5914a65c6b28@mock.com",
            "firstName": "Mock 1467",
            "lastName": "Associate 1467"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1492",
      "lastName": "Associate 1492",
      "email": "mock1492.employee9c49ed5b-4f4b-4a3d-8c09-2b823a3358e2@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1492.employee9c49ed5b-4f4b-4a3d-8c09-2b823a3358e2@mock.com",
            "firstName": "Mock 1492",
            "lastName": "Associate 1492"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1161",
      "lastName": "Associate 1161",
      "email": "mock1161.employee72a86bd0-0a57-4cb8-92a5-0e560e72e157@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1161.employee72a86bd0-0a57-4cb8-92a5-0e560e72e157@mock.com",
            "firstName": "Mock 1161",
            "lastName": "Associate 1161"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1174",
      "lastName": "Associate 1174",
      "email": "mock1174.employee693cb4ff-390d-4bb0-9586-f9fe67ff75af@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1174.employee693cb4ff-390d-4bb0-9586-f9fe67ff75af@mock.com",
            "firstName": "Mock 1174",
            "lastName": "Associate 1174"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1176",
      "lastName": "Associate 1176",
      "email": "mock1176.employee16ff6e91-4202-4fa4-8871-2c74d2448fbd@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1176.employee16ff6e91-4202-4fa4-8871-2c74d2448fbd@mock.com",
            "firstName": "Mock 1176",
            "lastName": "Associate 1176"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1416",
      "lastName": "Associate 1416",
      "email": "mock1416.employee45060d8e-67a1-494d-9d26-827e64b33fc7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1416.employee45060d8e-67a1-494d-9d26-827e64b33fc7@mock.com",
            "firstName": "Mock 1416",
            "lastName": "Associate 1416"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1407",
      "lastName": "Associate 1407",
      "email": "mock1407.employeee5980555-6070-45f4-b8e1-0a31b324f9a0@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1407.employeee5980555-6070-45f4-b8e1-0a31b324f9a0@mock.com",
            "firstName": "Mock 1407",
            "lastName": "Associate 1407"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1385",
      "lastName": "Associate 1385",
      "email": "mock1385.employeea9caddda-0a84-457b-805f-591dfd92e55c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1385.employeea9caddda-0a84-457b-805f-591dfd92e55c@mock.com",
            "firstName": "Mock 1385",
            "lastName": "Associate 1385"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1090",
      "lastName": "Associate 1090",
      "email": "mock1090.employee3782f86a-4f56-4f74-96e2-39aa4d281d21@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1090.employee3782f86a-4f56-4f74-96e2-39aa4d281d21@mock.com",
            "firstName": "Mock 1090",
            "lastName": "Associate 1090"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1459",
      "lastName": "Associate 1459",
      "email": "mock1459.employee4233098d-c1c1-47bc-8e8e-55c379b2f892@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1459.employee4233098d-c1c1-47bc-8e8e-55c379b2f892@mock.com",
            "firstName": "Mock 1459",
            "lastName": "Associate 1459"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1104",
      "lastName": "Associate 1104",
      "email": "mock1104.employee62f575f9-7b45-4d00-b926-90be886a9694@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1104.employee62f575f9-7b45-4d00-b926-90be886a9694@mock.com",
            "firstName": "Mock 1104",
            "lastName": "Associate 1104"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1018",
      "lastName": "Associate 1018",
      "email": "mock1018.employee7dad8d8c-b2d0-4173-b54d-9336fe515341@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1018.employee7dad8d8c-b2d0-4173-b54d-9336fe515341@mock.com",
            "firstName": "Mock 1018",
            "lastName": "Associate 1018"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1189",
      "lastName": "Associate 1189",
      "email": "mock1189.employee0452e53f-adb8-4d00-94ac-3ac64b267808@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1189.employee0452e53f-adb8-4d00-94ac-3ac64b267808@mock.com",
            "firstName": "Mock 1189",
            "lastName": "Associate 1189"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1379",
      "lastName": "Associate 1379",
      "email": "mock1379.employeea5d08e35-cf28-4585-a4a6-4924019e5a8d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1379.employeea5d08e35-cf28-4585-a4a6-4924019e5a8d@mock.com",
            "firstName": "Mock 1379",
            "lastName": "Associate 1379"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1366",
      "lastName": "Associate 1366",
      "email": "mock1366.employeed1c1e693-fe73-4b34-ba34-4e42af6b0b94@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1366.employeed1c1e693-fe73-4b34-ba34-4e42af6b0b94@mock.com",
            "firstName": "Mock 1366",
            "lastName": "Associate 1366"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1087",
      "lastName": "Associate 1087",
      "email": "mock1087.employeefed33156-e4d9-4a2c-aa4d-8f60f5c1c867@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1087.employeefed33156-e4d9-4a2c-aa4d-8f60f5c1c867@mock.com",
            "firstName": "Mock 1087",
            "lastName": "Associate 1087"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1074",
      "lastName": "Associate 1074",
      "email": "mock1074.employee4c51fde6-9930-426b-829b-cc9b044fb387@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1074.employee4c51fde6-9930-426b-829b-cc9b044fb387@mock.com",
            "firstName": "Mock 1074",
            "lastName": "Associate 1074"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1481",
      "lastName": "Associate 1481",
      "email": "mock1481.employeefd6651f9-56ee-4127-9ffe-0d868f47b0e7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1481.employeefd6651f9-56ee-4127-9ffe-0d868f47b0e7@mock.com",
            "firstName": "Mock 1481",
            "lastName": "Associate 1481"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1474",
      "lastName": "Associate 1474",
      "email": "mock1474.employee334c28ae-fc9d-4c15-be76-24f89a705503@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1474.employee334c28ae-fc9d-4c15-be76-24f89a705503@mock.com",
            "firstName": "Mock 1474",
            "lastName": "Associate 1474"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1448",
      "lastName": "Associate 1448",
      "email": "mock1448.employeea4d63d89-22bd-4831-acdc-17fea9a6e99b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1448.employeea4d63d89-22bd-4831-acdc-17fea9a6e99b@mock.com",
            "firstName": "Mock 1448",
            "lastName": "Associate 1448"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1017",
      "lastName": "Associate 1017",
      "email": "mock1017.employee4526833d-7681-41c0-9e3a-616873a8bc65@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1017.employee4526833d-7681-41c0-9e3a-616873a8bc65@mock.com",
            "firstName": "Mock 1017",
            "lastName": "Associate 1017"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1003",
      "lastName": "Associate 1003",
      "email": "mock1003.employee07f8757e-0065-4458-8aeb-3772f1c384d1@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1003.employee07f8757e-0065-4458-8aeb-3772f1c384d1@mock.com",
            "firstName": "Mock 1003",
            "lastName": "Associate 1003"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1037",
      "lastName": "Associate 1037",
      "email": "mock1037.employee9e157dd2-9e49-4ee4-b3f3-8c8661cfeadd@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1037.employee9e157dd2-9e49-4ee4-b3f3-8c8661cfeadd@mock.com",
            "firstName": "Mock 1037",
            "lastName": "Associate 1037"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1284",
      "lastName": "Associate 1284",
      "email": "mock1284.employee57a5d0ab-def3-485e-9d20-7dc91f0ba22e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1284.employee57a5d0ab-def3-485e-9d20-7dc91f0ba22e@mock.com",
            "firstName": "Mock 1284",
            "lastName": "Associate 1284"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1114",
      "lastName": "Associate 1114",
      "email": "mock1114.employeebe910648-b513-4a3f-b60e-094bca0a386b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1114.employeebe910648-b513-4a3f-b60e-094bca0a386b@mock.com",
            "firstName": "Mock 1114",
            "lastName": "Associate 1114"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1030",
      "lastName": "Associate 1030",
      "email": "mock1030.employeed60d45b8-e6b3-44e7-bfcf-815ebb12b4af@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1030.employeed60d45b8-e6b3-44e7-bfcf-815ebb12b4af@mock.com",
            "firstName": "Mock 1030",
            "lastName": "Associate 1030"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1180",
      "lastName": "Associate 1180",
      "email": "mock1180.employee06a4a375-68b3-47d0-815a-aa5132f8792f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1180.employee06a4a375-68b3-47d0-815a-aa5132f8792f@mock.com",
            "firstName": "Mock 1180",
            "lastName": "Associate 1180"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1323",
      "lastName": "Associate 1323",
      "email": "mock1323.employeee029abc5-7551-4662-9633-a15640eb4628@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1323.employeee029abc5-7551-4662-9633-a15640eb4628@mock.com",
            "firstName": "Mock 1323",
            "lastName": "Associate 1323"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1193",
      "lastName": "Associate 1193",
      "email": "mock1193.employeec4de8a54-c1aa-4fb8-8e2c-8b50ebe38987@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1193.employeec4de8a54-c1aa-4fb8-8e2c-8b50ebe38987@mock.com",
            "firstName": "Mock 1193",
            "lastName": "Associate 1193"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1294",
      "lastName": "Associate 1294",
      "email": "mock1294.employeebbcc4836-d529-435d-b837-ebd32fbda5d8@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1294.employeebbcc4836-d529-435d-b837-ebd32fbda5d8@mock.com",
            "firstName": "Mock 1294",
            "lastName": "Associate 1294"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1244",
      "lastName": "Associate 1244",
      "email": "mock1244.employeee69f9a0d-78fc-4a2b-8a2b-04dd1a5c5aad@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1244.employeee69f9a0d-78fc-4a2b-8a2b-04dd1a5c5aad@mock.com",
            "firstName": "Mock 1244",
            "lastName": "Associate 1244"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1308",
      "lastName": "Associate 1308",
      "email": "mock1308.employeef52fbfa1-24ba-43ee-9d24-e68ba431f0bf@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1308.employeef52fbfa1-24ba-43ee-9d24-e68ba431f0bf@mock.com",
            "firstName": "Mock 1308",
            "lastName": "Associate 1308"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1102",
      "lastName": "Associate 1102",
      "email": "mock1102.employee7ae9750b-b581-4af6-b4bc-3c867e8f5db2@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1102.employee7ae9750b-b581-4af6-b4bc-3c867e8f5db2@mock.com",
            "firstName": "Mock 1102",
            "lastName": "Associate 1102"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1068",
      "lastName": "Associate 1068",
      "email": "mock1068.employee00f6132e-bbca-4efc-9e36-9ec062c178b9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1068.employee00f6132e-bbca-4efc-9e36-9ec062c178b9@mock.com",
            "firstName": "Mock 1068",
            "lastName": "Associate 1068"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1357",
      "lastName": "Associate 1357",
      "email": "mock1357.employee90335686-32cc-4eae-a85d-dc8ede7c357a@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1357.employee90335686-32cc-4eae-a85d-dc8ede7c357a@mock.com",
            "firstName": "Mock 1357",
            "lastName": "Associate 1357"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1224",
      "lastName": "Associate 1224",
      "email": "mock1224.employee2d0b5465-6c2b-4c1a-817c-c243f70ff128@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1224.employee2d0b5465-6c2b-4c1a-817c-c243f70ff128@mock.com",
            "firstName": "Mock 1224",
            "lastName": "Associate 1224"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1368",
      "lastName": "Associate 1368",
      "email": "mock1368.employeebddcaf5d-b49e-44d8-b61d-665f041832dc@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1368.employeebddcaf5d-b49e-44d8-b61d-665f041832dc@mock.com",
            "firstName": "Mock 1368",
            "lastName": "Associate 1368"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1396",
      "lastName": "Associate 1396",
      "email": "mock1396.employeec89dea46-2209-4ded-96fc-260940c57623@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1396.employeec89dea46-2209-4ded-96fc-260940c57623@mock.com",
            "firstName": "Mock 1396",
            "lastName": "Associate 1396"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1184",
      "lastName": "Associate 1184",
      "email": "mock1184.employeeb75962cc-d9ef-4e66-b5d4-ef0e10159f1d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1184.employeeb75962cc-d9ef-4e66-b5d4-ef0e10159f1d@mock.com",
            "firstName": "Mock 1184",
            "lastName": "Associate 1184"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1155",
      "lastName": "Associate 1155",
      "email": "mock1155.employee9ed5ee42-f409-47dc-9fe2-a282deceaeed@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1155.employee9ed5ee42-f409-47dc-9fe2-a282deceaeed@mock.com",
            "firstName": "Mock 1155",
            "lastName": "Associate 1155"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1317",
      "lastName": "Associate 1317",
      "email": "mock1317.employee974cf3ce-93ba-40a0-b548-550ee37ef8a6@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1317.employee974cf3ce-93ba-40a0-b548-550ee37ef8a6@mock.com",
            "firstName": "Mock 1317",
            "lastName": "Associate 1317"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1369",
      "lastName": "Associate 1369",
      "email": "mock1369.employeeaa5004da-e28b-41df-b7fc-f801fa1a7a4b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1369.employeeaa5004da-e28b-41df-b7fc-f801fa1a7a4b@mock.com",
            "firstName": "Mock 1369",
            "lastName": "Associate 1369"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1162",
      "lastName": "Associate 1162",
      "email": "mock1162.employee3ab52075-0df4-47df-936c-7fbf899af385@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1162.employee3ab52075-0df4-47df-936c-7fbf899af385@mock.com",
            "firstName": "Mock 1162",
            "lastName": "Associate 1162"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1309",
      "lastName": "Associate 1309",
      "email": "mock1309.employee47fda667-3123-4c69-aef4-30daabd57a4f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1309.employee47fda667-3123-4c69-aef4-30daabd57a4f@mock.com",
            "firstName": "Mock 1309",
            "lastName": "Associate 1309"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1233",
      "lastName": "Associate 1233",
      "email": "mock1233.employeea74832a1-88a7-4a9c-adb3-253d6949c0e7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1233.employeea74832a1-88a7-4a9c-adb3-253d6949c0e7@mock.com",
            "firstName": "Mock 1233",
            "lastName": "Associate 1233"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1439",
      "lastName": "Associate 1439",
      "email": "mock1439.employeec2899898-19e4-45b8-8952-d5db366a0ab2@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1439.employeec2899898-19e4-45b8-8952-d5db366a0ab2@mock.com",
            "firstName": "Mock 1439",
            "lastName": "Associate 1439"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1453",
      "lastName": "Associate 1453",
      "email": "mock1453.employee6ef761d0-dee5-47ac-9069-cb397ad3d30c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1453.employee6ef761d0-dee5-47ac-9069-cb397ad3d30c@mock.com",
            "firstName": "Mock 1453",
            "lastName": "Associate 1453"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1431",
      "lastName": "Associate 1431",
      "email": "mock1431.employee3a7574d6-8c44-447c-bbd7-0e4628b76f64@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1431.employee3a7574d6-8c44-447c-bbd7-0e4628b76f64@mock.com",
            "firstName": "Mock 1431",
            "lastName": "Associate 1431"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1044",
      "lastName": "Associate 1044",
      "email": "mock1044.employee987cbbf0-bc89-4305-831a-b09cce23b935@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1044.employee987cbbf0-bc89-4305-831a-b09cce23b935@mock.com",
            "firstName": "Mock 1044",
            "lastName": "Associate 1044"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1213",
      "lastName": "Associate 1213",
      "email": "mock1213.employee71414dcf-3009-4d06-b947-df1540c3b604@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1213.employee71414dcf-3009-4d06-b947-df1540c3b604@mock.com",
            "firstName": "Mock 1213",
            "lastName": "Associate 1213"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1009",
      "lastName": "Associate 1009",
      "email": "mock1009.employee8ac8e15c-6add-451c-9800-184f1b795bb3@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1009.employee8ac8e15c-6add-451c-9800-184f1b795bb3@mock.com",
            "firstName": "Mock 1009",
            "lastName": "Associate 1009"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1259",
      "lastName": "Associate 1259",
      "email": "mock1259.employeea618ebf1-a6e2-46b0-acd2-ead9007dde91@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1259.employeea618ebf1-a6e2-46b0-acd2-ead9007dde91@mock.com",
            "firstName": "Mock 1259",
            "lastName": "Associate 1259"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1078",
      "lastName": "Associate 1078",
      "email": "mock1078.employeee328d335-6a42-444f-9f65-0d204bc631e8@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1078.employeee328d335-6a42-444f-9f65-0d204bc631e8@mock.com",
            "firstName": "Mock 1078",
            "lastName": "Associate 1078"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1302",
      "lastName": "Associate 1302",
      "email": "mock1302.employee5fad6ade-e920-4b90-9758-7a0e449e21c9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1302.employee5fad6ade-e920-4b90-9758-7a0e449e21c9@mock.com",
            "firstName": "Mock 1302",
            "lastName": "Associate 1302"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1083",
      "lastName": "Associate 1083",
      "email": "mock1083.employee2fb22899-feb5-484a-943e-bb178b7d7709@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1083.employee2fb22899-feb5-484a-943e-bb178b7d7709@mock.com",
            "firstName": "Mock 1083",
            "lastName": "Associate 1083"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1277",
      "lastName": "Associate 1277",
      "email": "mock1277.employee5036f361-7a6e-4881-befa-9a25f894f333@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1277.employee5036f361-7a6e-4881-befa-9a25f894f333@mock.com",
            "firstName": "Mock 1277",
            "lastName": "Associate 1277"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1443",
      "lastName": "Associate 1443",
      "email": "mock1443.employee5217649c-117b-4352-a23b-671e50fbb9f4@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1443.employee5217649c-117b-4352-a23b-671e50fbb9f4@mock.com",
            "firstName": "Mock 1443",
            "lastName": "Associate 1443"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1183",
      "lastName": "Associate 1183",
      "email": "mock1183.employeefc14e066-7141-448e-a932-7e0e68713d35@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1183.employeefc14e066-7141-448e-a932-7e0e68713d35@mock.com",
            "firstName": "Mock 1183",
            "lastName": "Associate 1183"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1159",
      "lastName": "Associate 1159",
      "email": "mock1159.employee640218e3-e0f1-4aff-aaa0-1a7b6ca42b30@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1159.employee640218e3-e0f1-4aff-aaa0-1a7b6ca42b30@mock.com",
            "firstName": "Mock 1159",
            "lastName": "Associate 1159"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1405",
      "lastName": "Associate 1405",
      "email": "mock1405.employeedbb9dc04-18f2-40c2-8dbc-709363c3c15c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1405.employeedbb9dc04-18f2-40c2-8dbc-709363c3c15c@mock.com",
            "firstName": "Mock 1405",
            "lastName": "Associate 1405"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1463",
      "lastName": "Associate 1463",
      "email": "mock1463.employee7dfb8cfd-0c59-454b-89db-7278df71293e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1463.employee7dfb8cfd-0c59-454b-89db-7278df71293e@mock.com",
            "firstName": "Mock 1463",
            "lastName": "Associate 1463"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1324",
      "lastName": "Associate 1324",
      "email": "mock1324.employeec7b79120-eb34-44ae-ad3e-6931beb51427@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1324.employeec7b79120-eb34-44ae-ad3e-6931beb51427@mock.com",
            "firstName": "Mock 1324",
            "lastName": "Associate 1324"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1049",
      "lastName": "Associate 1049",
      "email": "mock1049.employeead4b2575-ae2e-49a5-a46b-12355ccc8a5c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1049.employeead4b2575-ae2e-49a5-a46b-12355ccc8a5c@mock.com",
            "firstName": "Mock 1049",
            "lastName": "Associate 1049"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1021",
      "lastName": "Associate 1021",
      "email": "mock1021.employeeb006d41b-5643-4377-ac71-16a0e3b4c1dc@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1021.employeeb006d41b-5643-4377-ac71-16a0e3b4c1dc@mock.com",
            "firstName": "Mock 1021",
            "lastName": "Associate 1021"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1094",
      "lastName": "Associate 1094",
      "email": "mock1094.employee4ea561e0-f38b-4162-bb59-929d484bc345@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1094.employee4ea561e0-f38b-4162-bb59-929d484bc345@mock.com",
            "firstName": "Mock 1094",
            "lastName": "Associate 1094"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1217",
      "lastName": "Associate 1217",
      "email": "mock1217.employeea490fb78-0d25-4bed-848f-9c177aea63b7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1217.employeea490fb78-0d25-4bed-848f-9c177aea63b7@mock.com",
            "firstName": "Mock 1217",
            "lastName": "Associate 1217"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1024",
      "lastName": "Associate 1024",
      "email": "mock1024.employeeb28f1ba1-1436-4335-9718-3f412758d8b8@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1024.employeeb28f1ba1-1436-4335-9718-3f412758d8b8@mock.com",
            "firstName": "Mock 1024",
            "lastName": "Associate 1024"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1210",
      "lastName": "Associate 1210",
      "email": "mock1210.employeec889de8d-0ebf-4123-b56d-29524700afec@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1210.employeec889de8d-0ebf-4123-b56d-29524700afec@mock.com",
            "firstName": "Mock 1210",
            "lastName": "Associate 1210"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1460",
      "lastName": "Associate 1460",
      "email": "mock1460.employee9568740e-2030-4895-a9ff-093aaae7b96e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1460.employee9568740e-2030-4895-a9ff-093aaae7b96e@mock.com",
            "firstName": "Mock 1460",
            "lastName": "Associate 1460"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1447",
      "lastName": "Associate 1447",
      "email": "mock1447.employee00297cb5-c53f-48bf-9c28-bc2bbe95aadf@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1447.employee00297cb5-c53f-48bf-9c28-bc2bbe95aadf@mock.com",
            "firstName": "Mock 1447",
            "lastName": "Associate 1447"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1391",
      "lastName": "Associate 1391",
      "email": "mock1391.employeee2b4bb5a-45f5-41b9-8be5-2104d37ea10b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1391.employeee2b4bb5a-45f5-41b9-8be5-2104d37ea10b@mock.com",
            "firstName": "Mock 1391",
            "lastName": "Associate 1391"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1209",
      "lastName": "Associate 1209",
      "email": "mock1209.employee73a3ee14-ad5c-43e2-978e-b1b7f2e5796d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1209.employee73a3ee14-ad5c-43e2-978e-b1b7f2e5796d@mock.com",
            "firstName": "Mock 1209",
            "lastName": "Associate 1209"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1020",
      "lastName": "Associate 1020",
      "email": "mock1020.employeecd601d9f-e248-4e5a-ac57-8cbe5b24a4ed@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1020.employeecd601d9f-e248-4e5a-ac57-8cbe5b24a4ed@mock.com",
            "firstName": "Mock 1020",
            "lastName": "Associate 1020"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1429",
      "lastName": "Associate 1429",
      "email": "mock1429.employeec639adb2-7a29-4845-ac39-7512217febc7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1429.employeec639adb2-7a29-4845-ac39-7512217febc7@mock.com",
            "firstName": "Mock 1429",
            "lastName": "Associate 1429"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1105",
      "lastName": "Associate 1105",
      "email": "mock1105.employeed49ac737-e220-41ec-826f-edfaea9e81b0@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1105.employeed49ac737-e220-41ec-826f-edfaea9e81b0@mock.com",
            "firstName": "Mock 1105",
            "lastName": "Associate 1105"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1398",
      "lastName": "Associate 1398",
      "email": "mock1398.employee16f684e4-b2f4-4d46-a468-c2b01bf6a9fa@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1398.employee16f684e4-b2f4-4d46-a468-c2b01bf6a9fa@mock.com",
            "firstName": "Mock 1398",
            "lastName": "Associate 1398"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1325",
      "lastName": "Associate 1325",
      "email": "mock1325.employee9fff045b-1184-4599-a4ac-d73bb7628379@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1325.employee9fff045b-1184-4599-a4ac-d73bb7628379@mock.com",
            "firstName": "Mock 1325",
            "lastName": "Associate 1325"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1351",
      "lastName": "Associate 1351",
      "email": "mock1351.employeec0f54d6a-63bc-427f-9b7d-54875d5643f7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1351.employeec0f54d6a-63bc-427f-9b7d-54875d5643f7@mock.com",
            "firstName": "Mock 1351",
            "lastName": "Associate 1351"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1476",
      "lastName": "Associate 1476",
      "email": "mock1476.employee1be00015-8bdf-4d3f-90b8-9b1455914056@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1476.employee1be00015-8bdf-4d3f-90b8-9b1455914056@mock.com",
            "firstName": "Mock 1476",
            "lastName": "Associate 1476"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1051",
      "lastName": "Associate 1051",
      "email": "mock1051.employeeb7509924-5ade-409f-bc18-43191b1638e9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1051.employeeb7509924-5ade-409f-bc18-43191b1638e9@mock.com",
            "firstName": "Mock 1051",
            "lastName": "Associate 1051"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1197",
      "lastName": "Associate 1197",
      "email": "mock1197.employeee01c7508-4165-4f14-86dd-b509b6ea7901@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1197.employeee01c7508-4165-4f14-86dd-b509b6ea7901@mock.com",
            "firstName": "Mock 1197",
            "lastName": "Associate 1197"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1205",
      "lastName": "Associate 1205",
      "email": "mock1205.employee19e88dad-a0ac-4af1-857d-88dc4c689f86@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1205.employee19e88dad-a0ac-4af1-857d-88dc4c689f86@mock.com",
            "firstName": "Mock 1205",
            "lastName": "Associate 1205"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1097",
      "lastName": "Associate 1097",
      "email": "mock1097.employee6fd230cd-174c-465e-aab4-43fa8c67398b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1097.employee6fd230cd-174c-465e-aab4-43fa8c67398b@mock.com",
            "firstName": "Mock 1097",
            "lastName": "Associate 1097"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1232",
      "lastName": "Associate 1232",
      "email": "mock1232.employee24e2c188-a386-4a92-8631-c0dedb09b923@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1232.employee24e2c188-a386-4a92-8631-c0dedb09b923@mock.com",
            "firstName": "Mock 1232",
            "lastName": "Associate 1232"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1338",
      "lastName": "Associate 1338",
      "email": "mock1338.employeeb8f6b458-aecd-4972-8138-c907ba2b59da@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1338.employeeb8f6b458-aecd-4972-8138-c907ba2b59da@mock.com",
            "firstName": "Mock 1338",
            "lastName": "Associate 1338"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1479",
      "lastName": "Associate 1479",
      "email": "mock1479.employee13992b45-1fdf-416c-9f4e-6433835a33cb@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1479.employee13992b45-1fdf-416c-9f4e-6433835a33cb@mock.com",
            "firstName": "Mock 1479",
            "lastName": "Associate 1479"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1084",
      "lastName": "Associate 1084",
      "email": "mock1084.employee5115d7c1-b4c3-47ec-9f54-a9507ba6181b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1084.employee5115d7c1-b4c3-47ec-9f54-a9507ba6181b@mock.com",
            "firstName": "Mock 1084",
            "lastName": "Associate 1084"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1300",
      "lastName": "Associate 1300",
      "email": "mock1300.employee2ca0e9b2-2786-4f4d-99cc-b0db3195d391@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1300.employee2ca0e9b2-2786-4f4d-99cc-b0db3195d391@mock.com",
            "firstName": "Mock 1300",
            "lastName": "Associate 1300"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1229",
      "lastName": "Associate 1229",
      "email": "mock1229.employee59c0f72c-7eee-412c-beb9-6d47daf064ce@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1229.employee59c0f72c-7eee-412c-beb9-6d47daf064ce@mock.com",
            "firstName": "Mock 1229",
            "lastName": "Associate 1229"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1330",
      "lastName": "Associate 1330",
      "email": "mock1330.employeecc1f17d1-0c31-4c63-bcea-fc0d981b5c10@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1330.employeecc1f17d1-0c31-4c63-bcea-fc0d981b5c10@mock.com",
            "firstName": "Mock 1330",
            "lastName": "Associate 1330"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1171",
      "lastName": "Associate 1171",
      "email": "mock1171.employee21b64bc8-973e-454a-a268-4f07df6ec590@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1171.employee21b64bc8-973e-454a-a268-4f07df6ec590@mock.com",
            "firstName": "Mock 1171",
            "lastName": "Associate 1171"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1128",
      "lastName": "Associate 1128",
      "email": "mock1128.employeeab0b08f4-7d0c-4391-bf52-1dac315ac78d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1128.employeeab0b08f4-7d0c-4391-bf52-1dac315ac78d@mock.com",
            "firstName": "Mock 1128",
            "lastName": "Associate 1128"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1270",
      "lastName": "Associate 1270",
      "email": "mock1270.employee13687eb6-5b82-4c17-9b16-e6fd8b218ca7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1270.employee13687eb6-5b82-4c17-9b16-e6fd8b218ca7@mock.com",
            "firstName": "Mock 1270",
            "lastName": "Associate 1270"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1450",
      "lastName": "Associate 1450",
      "email": "mock1450.employeeac2dcc3a-1b8f-4af7-a6cb-1d0aacf551ab@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1450.employeeac2dcc3a-1b8f-4af7-a6cb-1d0aacf551ab@mock.com",
            "firstName": "Mock 1450",
            "lastName": "Associate 1450"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1304",
      "lastName": "Associate 1304",
      "email": "mock1304.employee0ebd041f-3a95-49b6-8071-24ab95c1eb2f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1304.employee0ebd041f-3a95-49b6-8071-24ab95c1eb2f@mock.com",
            "firstName": "Mock 1304",
            "lastName": "Associate 1304"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1487",
      "lastName": "Associate 1487",
      "email": "mock1487.employee72abcbb8-a8c4-4b5a-bf82-377ffdc19d40@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1487.employee72abcbb8-a8c4-4b5a-bf82-377ffdc19d40@mock.com",
            "firstName": "Mock 1487",
            "lastName": "Associate 1487"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1449",
      "lastName": "Associate 1449",
      "email": "mock1449.employeebff7754b-dff4-4ab1-ab99-465067a0637f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1449.employeebff7754b-dff4-4ab1-ab99-465067a0637f@mock.com",
            "firstName": "Mock 1449",
            "lastName": "Associate 1449"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1383",
      "lastName": "Associate 1383",
      "email": "mock1383.employee56effad1-bfbc-4220-b90b-4722a41bd0de@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1383.employee56effad1-bfbc-4220-b90b-4722a41bd0de@mock.com",
            "firstName": "Mock 1383",
            "lastName": "Associate 1383"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1014",
      "lastName": "Associate 1014",
      "email": "mock1014.employee1150b106-4364-45f1-8a41-f6490315a86b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1014.employee1150b106-4364-45f1-8a41-f6490315a86b@mock.com",
            "firstName": "Mock 1014",
            "lastName": "Associate 1014"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1042",
      "lastName": "Associate 1042",
      "email": "mock1042.employeede3807d4-1122-4786-9673-347460aff851@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1042.employeede3807d4-1122-4786-9673-347460aff851@mock.com",
            "firstName": "Mock 1042",
            "lastName": "Associate 1042"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1199",
      "lastName": "Associate 1199",
      "email": "mock1199.employee7384d69a-0b8b-4211-8555-157ca1ad7225@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1199.employee7384d69a-0b8b-4211-8555-157ca1ad7225@mock.com",
            "firstName": "Mock 1199",
            "lastName": "Associate 1199"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1215",
      "lastName": "Associate 1215",
      "email": "mock1215.employeef5dfe0e6-0a4a-49a4-9415-007bcfd230a5@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1215.employeef5dfe0e6-0a4a-49a4-9415-007bcfd230a5@mock.com",
            "firstName": "Mock 1215",
            "lastName": "Associate 1215"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1425",
      "lastName": "Associate 1425",
      "email": "mock1425.employeedadec181-3f5d-4217-a8a6-2a2546b7947a@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1425.employeedadec181-3f5d-4217-a8a6-2a2546b7947a@mock.com",
            "firstName": "Mock 1425",
            "lastName": "Associate 1425"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1349",
      "lastName": "Associate 1349",
      "email": "mock1349.employee35f3e203-b77e-4699-8397-b41803d9022d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1349.employee35f3e203-b77e-4699-8397-b41803d9022d@mock.com",
            "firstName": "Mock 1349",
            "lastName": "Associate 1349"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1216",
      "lastName": "Associate 1216",
      "email": "mock1216.employee87347be6-7038-431d-90b1-1d52bbbd4ba7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1216.employee87347be6-7038-431d-90b1-1d52bbbd4ba7@mock.com",
            "firstName": "Mock 1216",
            "lastName": "Associate 1216"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1026",
      "lastName": "Associate 1026",
      "email": "mock1026.employee63be17ac-e8fd-4b16-a9fb-d36f5022ce63@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1026.employee63be17ac-e8fd-4b16-a9fb-d36f5022ce63@mock.com",
            "firstName": "Mock 1026",
            "lastName": "Associate 1026"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1344",
      "lastName": "Associate 1344",
      "email": "mock1344.employeeb9d194cd-80dd-4927-a572-e4a7455ee222@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1344.employeeb9d194cd-80dd-4927-a572-e4a7455ee222@mock.com",
            "firstName": "Mock 1344",
            "lastName": "Associate 1344"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1490",
      "lastName": "Associate 1490",
      "email": "mock1490.employee1bd325c1-48bc-48c8-9297-d09db9ec1f7a@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1490.employee1bd325c1-48bc-48c8-9297-d09db9ec1f7a@mock.com",
            "firstName": "Mock 1490",
            "lastName": "Associate 1490"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1494",
      "lastName": "Associate 1494",
      "email": "mock1494.employeeb5baa8ff-cc20-45d6-afdb-20ed0271e611@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1494.employeeb5baa8ff-cc20-45d6-afdb-20ed0271e611@mock.com",
            "firstName": "Mock 1494",
            "lastName": "Associate 1494"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1413",
      "lastName": "Associate 1413",
      "email": "mock1413.employee158ff754-456b-41ee-bb35-422b52ac6231@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1413.employee158ff754-456b-41ee-bb35-422b52ac6231@mock.com",
            "firstName": "Mock 1413",
            "lastName": "Associate 1413"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1472",
      "lastName": "Associate 1472",
      "email": "mock1472.employee3fc92f0e-1788-4d7f-b7dc-e1908493e365@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1472.employee3fc92f0e-1788-4d7f-b7dc-e1908493e365@mock.com",
            "firstName": "Mock 1472",
            "lastName": "Associate 1472"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1027",
      "lastName": "Associate 1027",
      "email": "mock1027.employeee24f348c-97dc-40e4-8274-fb482fd74ff8@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1027.employeee24f348c-97dc-40e4-8274-fb482fd74ff8@mock.com",
            "firstName": "Mock 1027",
            "lastName": "Associate 1027"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1077",
      "lastName": "Associate 1077",
      "email": "mock1077.employee572e31ad-258b-43d6-85e9-33cc9edd6f39@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1077.employee572e31ad-258b-43d6-85e9-33cc9edd6f39@mock.com",
            "firstName": "Mock 1077",
            "lastName": "Associate 1077"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1179",
      "lastName": "Associate 1179",
      "email": "mock1179.employeec9c8d6b0-50ea-41a8-8bf6-51b4bd58f88c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1179.employeec9c8d6b0-50ea-41a8-8bf6-51b4bd58f88c@mock.com",
            "firstName": "Mock 1179",
            "lastName": "Associate 1179"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1466",
      "lastName": "Associate 1466",
      "email": "mock1466.employee8e89e774-4ceb-404f-8632-a2ad0a1e9fda@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1466.employee8e89e774-4ceb-404f-8632-a2ad0a1e9fda@mock.com",
            "firstName": "Mock 1466",
            "lastName": "Associate 1466"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1305",
      "lastName": "Associate 1305",
      "email": "mock1305.employee8c2cb6cc-2024-48c8-8923-7df45d401ac3@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1305.employee8c2cb6cc-2024-48c8-8923-7df45d401ac3@mock.com",
            "firstName": "Mock 1305",
            "lastName": "Associate 1305"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1444",
      "lastName": "Associate 1444",
      "email": "mock1444.employee0a91d80c-54e7-4dd3-8fc4-a39b71e79c06@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1444.employee0a91d80c-54e7-4dd3-8fc4-a39b71e79c06@mock.com",
            "firstName": "Mock 1444",
            "lastName": "Associate 1444"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1280",
      "lastName": "Associate 1280",
      "email": "mock1280.employee44939af5-8656-4fa2-95c0-d7b7353e6bb5@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1280.employee44939af5-8656-4fa2-95c0-d7b7353e6bb5@mock.com",
            "firstName": "Mock 1280",
            "lastName": "Associate 1280"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1054",
      "lastName": "Associate 1054",
      "email": "mock1054.employee0a48875f-2d53-490a-8919-cd1bcafa1ec9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1054.employee0a48875f-2d53-490a-8919-cd1bcafa1ec9@mock.com",
            "firstName": "Mock 1054",
            "lastName": "Associate 1054"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1129",
      "lastName": "Associate 1129",
      "email": "mock1129.employee7e77b7a7-2c75-4dc5-b3ec-8d3e8eb5ee82@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1129.employee7e77b7a7-2c75-4dc5-b3ec-8d3e8eb5ee82@mock.com",
            "firstName": "Mock 1129",
            "lastName": "Associate 1129"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1166",
      "lastName": "Associate 1166",
      "email": "mock1166.employee1fab9a4f-ab0d-458f-8552-7d380aa43c8d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1166.employee1fab9a4f-ab0d-458f-8552-7d380aa43c8d@mock.com",
            "firstName": "Mock 1166",
            "lastName": "Associate 1166"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1111",
      "lastName": "Associate 1111",
      "email": "mock1111.employee4dd57985-3370-4b9c-ad0c-05ec083d2e13@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1111.employee4dd57985-3370-4b9c-ad0c-05ec083d2e13@mock.com",
            "firstName": "Mock 1111",
            "lastName": "Associate 1111"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1150",
      "lastName": "Associate 1150",
      "email": "mock1150.employeee93a11be-9476-4918-924a-f110c484f2e9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1150.employeee93a11be-9476-4918-924a-f110c484f2e9@mock.com",
            "firstName": "Mock 1150",
            "lastName": "Associate 1150"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1446",
      "lastName": "Associate 1446",
      "email": "mock1446.employee4088f8a9-7735-4f5b-85f1-f765d2644393@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1446.employee4088f8a9-7735-4f5b-85f1-f765d2644393@mock.com",
            "firstName": "Mock 1446",
            "lastName": "Associate 1446"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1471",
      "lastName": "Associate 1471",
      "email": "mock1471.employee1f4f0178-35c8-4f01-91b2-e0d41fbfb8c9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1471.employee1f4f0178-35c8-4f01-91b2-e0d41fbfb8c9@mock.com",
            "firstName": "Mock 1471",
            "lastName": "Associate 1471"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1264",
      "lastName": "Associate 1264",
      "email": "mock1264.employeeac65d48e-df61-4bcd-a3c1-5ff0561c3d12@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1264.employeeac65d48e-df61-4bcd-a3c1-5ff0561c3d12@mock.com",
            "firstName": "Mock 1264",
            "lastName": "Associate 1264"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1071",
      "lastName": "Associate 1071",
      "email": "mock1071.employee5cec9fc3-fa7c-442d-aa38-5d4f68b8207d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1071.employee5cec9fc3-fa7c-442d-aa38-5d4f68b8207d@mock.com",
            "firstName": "Mock 1071",
            "lastName": "Associate 1071"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1420",
      "lastName": "Associate 1420",
      "email": "mock1420.employee3803333d-01ff-4359-8165-d1bac8ef57bd@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1420.employee3803333d-01ff-4359-8165-d1bac8ef57bd@mock.com",
            "firstName": "Mock 1420",
            "lastName": "Associate 1420"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1058",
      "lastName": "Associate 1058",
      "email": "mock1058.employeedde6dad1-13e4-4a13-9c34-a4eed3bcebe2@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1058.employeedde6dad1-13e4-4a13-9c34-a4eed3bcebe2@mock.com",
            "firstName": "Mock 1058",
            "lastName": "Associate 1058"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1073",
      "lastName": "Associate 1073",
      "email": "mock1073.employeec5b13e1f-34ab-4fc9-924b-63596bb0dd8c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1073.employeec5b13e1f-34ab-4fc9-924b-63596bb0dd8c@mock.com",
            "firstName": "Mock 1073",
            "lastName": "Associate 1073"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1310",
      "lastName": "Associate 1310",
      "email": "mock1310.employeef2844720-e95e-4a6c-b9e9-d731840bec57@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1310.employeef2844720-e95e-4a6c-b9e9-d731840bec57@mock.com",
            "firstName": "Mock 1310",
            "lastName": "Associate 1310"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1191",
      "lastName": "Associate 1191",
      "email": "mock1191.employee7db459d4-9d91-4f31-932f-ea063b23b1cc@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1191.employee7db459d4-9d91-4f31-932f-ea063b23b1cc@mock.com",
            "firstName": "Mock 1191",
            "lastName": "Associate 1191"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1002",
      "lastName": "Associate 1002",
      "email": "mock1002.employeef8ff2572-03bf-4dc7-a229-cfe02b189a1a@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1002.employeef8ff2572-03bf-4dc7-a229-cfe02b189a1a@mock.com",
            "firstName": "Mock 1002",
            "lastName": "Associate 1002"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1457",
      "lastName": "Associate 1457",
      "email": "mock1457.employeec6baddf6-1876-4c44-b05a-13a925bc551c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1457.employeec6baddf6-1876-4c44-b05a-13a925bc551c@mock.com",
            "firstName": "Mock 1457",
            "lastName": "Associate 1457"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1012",
      "lastName": "Associate 1012",
      "email": "mock1012.employeefa5b428e-a73d-44d8-b6de-1b056982070a@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1012.employeefa5b428e-a73d-44d8-b6de-1b056982070a@mock.com",
            "firstName": "Mock 1012",
            "lastName": "Associate 1012"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1400",
      "lastName": "Associate 1400",
      "email": "mock1400.employeec7cae0e6-702a-45f8-b5de-aea5d9726437@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1400.employeec7cae0e6-702a-45f8-b5de-aea5d9726437@mock.com",
            "firstName": "Mock 1400",
            "lastName": "Associate 1400"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1158",
      "lastName": "Associate 1158",
      "email": "mock1158.employeed2e60203-f688-4f83-b3e5-ff9d81992b0b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1158.employeed2e60203-f688-4f83-b3e5-ff9d81992b0b@mock.com",
            "firstName": "Mock 1158",
            "lastName": "Associate 1158"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1117",
      "lastName": "Associate 1117",
      "email": "mock1117.employeef0184638-93b3-48f1-ab51-fb3616279d7b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1117.employeef0184638-93b3-48f1-ab51-fb3616279d7b@mock.com",
            "firstName": "Mock 1117",
            "lastName": "Associate 1117"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1228",
      "lastName": "Associate 1228",
      "email": "mock1228.employee661d87e1-9953-41b8-9506-2e32648cb2e2@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1228.employee661d87e1-9953-41b8-9506-2e32648cb2e2@mock.com",
            "firstName": "Mock 1228",
            "lastName": "Associate 1228"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1315",
      "lastName": "Associate 1315",
      "email": "mock1315.employeeae1f4b08-350e-4a26-966f-1395ac4b1e21@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1315.employeeae1f4b08-350e-4a26-966f-1395ac4b1e21@mock.com",
            "firstName": "Mock 1315",
            "lastName": "Associate 1315"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1435",
      "lastName": "Associate 1435",
      "email": "mock1435.employeefad7c688-3784-4aa9-b1d3-9ddb1a8b67ff@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1435.employeefad7c688-3784-4aa9-b1d3-9ddb1a8b67ff@mock.com",
            "firstName": "Mock 1435",
            "lastName": "Associate 1435"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1072",
      "lastName": "Associate 1072",
      "email": "mock1072.employee8d6802bd-43c7-4e10-be89-398ef48d6c62@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1072.employee8d6802bd-43c7-4e10-be89-398ef48d6c62@mock.com",
            "firstName": "Mock 1072",
            "lastName": "Associate 1072"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1322",
      "lastName": "Associate 1322",
      "email": "mock1322.employeedb2bfb7b-71eb-4061-85b8-a9f196b19c9b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1322.employeedb2bfb7b-71eb-4061-85b8-a9f196b19c9b@mock.com",
            "firstName": "Mock 1322",
            "lastName": "Associate 1322"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1226",
      "lastName": "Associate 1226",
      "email": "mock1226.employeedaad502d-91ca-4c1b-bef8-95de101c0b16@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1226.employeedaad502d-91ca-4c1b-bef8-95de101c0b16@mock.com",
            "firstName": "Mock 1226",
            "lastName": "Associate 1226"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1319",
      "lastName": "Associate 1319",
      "email": "mock1319.employee55ce34c6-3317-46e5-8d0e-9ba91153c3af@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1319.employee55ce34c6-3317-46e5-8d0e-9ba91153c3af@mock.com",
            "firstName": "Mock 1319",
            "lastName": "Associate 1319"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1289",
      "lastName": "Associate 1289",
      "email": "mock1289.employee98a41071-f957-4b38-af8f-9fddc8ca9368@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1289.employee98a41071-f957-4b38-af8f-9fddc8ca9368@mock.com",
            "firstName": "Mock 1289",
            "lastName": "Associate 1289"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1454",
      "lastName": "Associate 1454",
      "email": "mock1454.employee93cc55ea-973b-4c49-ab25-feea6791b1b7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1454.employee93cc55ea-973b-4c49-ab25-feea6791b1b7@mock.com",
            "firstName": "Mock 1454",
            "lastName": "Associate 1454"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1363",
      "lastName": "Associate 1363",
      "email": "mock1363.employee46cb81ba-51fa-479e-a581-d467bb1d4ff9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1363.employee46cb81ba-51fa-479e-a581-d467bb1d4ff9@mock.com",
            "firstName": "Mock 1363",
            "lastName": "Associate 1363"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1493",
      "lastName": "Associate 1493",
      "email": "mock1493.employeee147a7aa-da83-4837-a75c-77f17423ef68@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1493.employeee147a7aa-da83-4837-a75c-77f17423ef68@mock.com",
            "firstName": "Mock 1493",
            "lastName": "Associate 1493"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1424",
      "lastName": "Associate 1424",
      "email": "mock1424.employee058a32ca-b975-4014-b2a4-392db42b227d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1424.employee058a32ca-b975-4014-b2a4-392db42b227d@mock.com",
            "firstName": "Mock 1424",
            "lastName": "Associate 1424"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1292",
      "lastName": "Associate 1292",
      "email": "mock1292.employeebd9558ba-8f6c-4389-9b7e-3a4e86080a53@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1292.employeebd9558ba-8f6c-4389-9b7e-3a4e86080a53@mock.com",
            "firstName": "Mock 1292",
            "lastName": "Associate 1292"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1374",
      "lastName": "Associate 1374",
      "email": "mock1374.employee9df9b3a7-897a-4bba-9208-207a8dcfdd53@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1374.employee9df9b3a7-897a-4bba-9208-207a8dcfdd53@mock.com",
            "firstName": "Mock 1374",
            "lastName": "Associate 1374"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1276",
      "lastName": "Associate 1276",
      "email": "mock1276.employeedc08bc4e-565e-4bd7-acdb-25226dc6e98e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1276.employeedc08bc4e-565e-4bd7-acdb-25226dc6e98e@mock.com",
            "firstName": "Mock 1276",
            "lastName": "Associate 1276"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1312",
      "lastName": "Associate 1312",
      "email": "mock1312.employee019e72f2-e61d-4cc1-9696-c2de048281d8@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1312.employee019e72f2-e61d-4cc1-9696-c2de048281d8@mock.com",
            "firstName": "Mock 1312",
            "lastName": "Associate 1312"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1411",
      "lastName": "Associate 1411",
      "email": "mock1411.employee3183827a-a23d-445b-aa5b-673b92ff81db@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1411.employee3183827a-a23d-445b-aa5b-673b92ff81db@mock.com",
            "firstName": "Mock 1411",
            "lastName": "Associate 1411"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1112",
      "lastName": "Associate 1112",
      "email": "mock1112.employeec1bfd2f3-e6c3-4f3c-8384-189eb8fcf56a@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1112.employeec1bfd2f3-e6c3-4f3c-8384-189eb8fcf56a@mock.com",
            "firstName": "Mock 1112",
            "lastName": "Associate 1112"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1484",
      "lastName": "Associate 1484",
      "email": "mock1484.employeeef38a932-1667-492b-be70-e459ec247755@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1484.employeeef38a932-1667-492b-be70-e459ec247755@mock.com",
            "firstName": "Mock 1484",
            "lastName": "Associate 1484"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1069",
      "lastName": "Associate 1069",
      "email": "mock1069.employee69feabbb-8463-4457-9ac7-f20f27f4e57f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1069.employee69feabbb-8463-4457-9ac7-f20f27f4e57f@mock.com",
            "firstName": "Mock 1069",
            "lastName": "Associate 1069"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1219",
      "lastName": "Associate 1219",
      "email": "mock1219.employeed5b6c933-671c-4ca5-948c-72c0274e2548@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1219.employeed5b6c933-671c-4ca5-948c-72c0274e2548@mock.com",
            "firstName": "Mock 1219",
            "lastName": "Associate 1219"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1245",
      "lastName": "Associate 1245",
      "email": "mock1245.employee60056bae-1e5a-4f57-8f80-ac113af7b0e8@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1245.employee60056bae-1e5a-4f57-8f80-ac113af7b0e8@mock.com",
            "firstName": "Mock 1245",
            "lastName": "Associate 1245"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1301",
      "lastName": "Associate 1301",
      "email": "mock1301.employee8091bdb7-2e9e-4a39-9bf0-f0fd9a485cc0@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1301.employee8091bdb7-2e9e-4a39-9bf0-f0fd9a485cc0@mock.com",
            "firstName": "Mock 1301",
            "lastName": "Associate 1301"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1154",
      "lastName": "Associate 1154",
      "email": "mock1154.employee3c5d799b-1c08-45f1-9ee8-22d56182296f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1154.employee3c5d799b-1c08-45f1-9ee8-22d56182296f@mock.com",
            "firstName": "Mock 1154",
            "lastName": "Associate 1154"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1115",
      "lastName": "Associate 1115",
      "email": "mock1115.employee56260432-cca2-4891-951e-cf8871c071ac@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1115.employee56260432-cca2-4891-951e-cf8871c071ac@mock.com",
            "firstName": "Mock 1115",
            "lastName": "Associate 1115"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1086",
      "lastName": "Associate 1086",
      "email": "mock1086.employee198de27a-ee3a-47b2-b7ec-e7842fc8c06e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1086.employee198de27a-ee3a-47b2-b7ec-e7842fc8c06e@mock.com",
            "firstName": "Mock 1086",
            "lastName": "Associate 1086"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1291",
      "lastName": "Associate 1291",
      "email": "mock1291.employee9b0206ab-0a6e-4bbc-8f23-ca54847f91cd@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1291.employee9b0206ab-0a6e-4bbc-8f23-ca54847f91cd@mock.com",
            "firstName": "Mock 1291",
            "lastName": "Associate 1291"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1390",
      "lastName": "Associate 1390",
      "email": "mock1390.employeea2ee05dc-cfdf-483f-8003-676dd4b9d304@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1390.employeea2ee05dc-cfdf-483f-8003-676dd4b9d304@mock.com",
            "firstName": "Mock 1390",
            "lastName": "Associate 1390"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1239",
      "lastName": "Associate 1239",
      "email": "mock1239.employee102675c3-e4e8-47ec-89f1-d866760fdf41@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1239.employee102675c3-e4e8-47ec-89f1-d866760fdf41@mock.com",
            "firstName": "Mock 1239",
            "lastName": "Associate 1239"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1500",
      "lastName": "Associate 1500",
      "email": "mock1500.employee0b9903c0-cdb1-42d5-ae30-7c1cddb110a5@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1500.employee0b9903c0-cdb1-42d5-ae30-7c1cddb110a5@mock.com",
            "firstName": "Mock 1500",
            "lastName": "Associate 1500"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1254",
      "lastName": "Associate 1254",
      "email": "mock1254.employeeb79602a7-ee20-4f18-9606-97e99258189e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1254.employeeb79602a7-ee20-4f18-9606-97e99258189e@mock.com",
            "firstName": "Mock 1254",
            "lastName": "Associate 1254"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1452",
      "lastName": "Associate 1452",
      "email": "mock1452.employee7efcb519-ea7d-4a24-a1c3-9fba70804c54@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1452.employee7efcb519-ea7d-4a24-a1c3-9fba70804c54@mock.com",
            "firstName": "Mock 1452",
            "lastName": "Associate 1452"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1412",
      "lastName": "Associate 1412",
      "email": "mock1412.employeef975cd9c-fcbc-4e92-be28-aee8b96dca7f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1412.employeef975cd9c-fcbc-4e92-be28-aee8b96dca7f@mock.com",
            "firstName": "Mock 1412",
            "lastName": "Associate 1412"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1421",
      "lastName": "Associate 1421",
      "email": "mock1421.employeea0c60b63-aa4d-42fb-843f-c9841cfa8c4c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1421.employeea0c60b63-aa4d-42fb-843f-c9841cfa8c4c@mock.com",
            "firstName": "Mock 1421",
            "lastName": "Associate 1421"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1354",
      "lastName": "Associate 1354",
      "email": "mock1354.employee2a001b8f-b7b3-45d7-aed1-c2ff8ca8439e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1354.employee2a001b8f-b7b3-45d7-aed1-c2ff8ca8439e@mock.com",
            "firstName": "Mock 1354",
            "lastName": "Associate 1354"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1348",
      "lastName": "Associate 1348",
      "email": "mock1348.employee97fd3eda-6864-45d7-abbc-2ea98ee6ed22@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1348.employee97fd3eda-6864-45d7-abbc-2ea98ee6ed22@mock.com",
            "firstName": "Mock 1348",
            "lastName": "Associate 1348"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1064",
      "lastName": "Associate 1064",
      "email": "mock1064.employee678b4778-f097-41cd-b2dc-ae12d203fe99@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1064.employee678b4778-f097-41cd-b2dc-ae12d203fe99@mock.com",
            "firstName": "Mock 1064",
            "lastName": "Associate 1064"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1167",
      "lastName": "Associate 1167",
      "email": "mock1167.employee9b07af19-7395-4126-a09b-65c11930053a@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1167.employee9b07af19-7395-4126-a09b-65c11930053a@mock.com",
            "firstName": "Mock 1167",
            "lastName": "Associate 1167"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1321",
      "lastName": "Associate 1321",
      "email": "mock1321.employeece792718-6cf9-49bc-9370-5f573e23bfa5@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1321.employeece792718-6cf9-49bc-9370-5f573e23bfa5@mock.com",
            "firstName": "Mock 1321",
            "lastName": "Associate 1321"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1144",
      "lastName": "Associate 1144",
      "email": "mock1144.employee8c841f38-551e-4dd2-96da-d070421a3995@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1144.employee8c841f38-551e-4dd2-96da-d070421a3995@mock.com",
            "firstName": "Mock 1144",
            "lastName": "Associate 1144"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1110",
      "lastName": "Associate 1110",
      "email": "mock1110.employee4aeaacd8-7649-4ae2-9482-edcfe0d55a13@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1110.employee4aeaacd8-7649-4ae2-9482-edcfe0d55a13@mock.com",
            "firstName": "Mock 1110",
            "lastName": "Associate 1110"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1004",
      "lastName": "Associate 1004",
      "email": "mock1004.employeebcec6ebe-0b17-4cd3-9639-213a9d8b1747@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1004.employeebcec6ebe-0b17-4cd3-9639-213a9d8b1747@mock.com",
            "firstName": "Mock 1004",
            "lastName": "Associate 1004"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1318",
      "lastName": "Associate 1318",
      "email": "mock1318.employee962282ae-e5dc-4260-ae66-48a761a841d7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1318.employee962282ae-e5dc-4260-ae66-48a761a841d7@mock.com",
            "firstName": "Mock 1318",
            "lastName": "Associate 1318"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1138",
      "lastName": "Associate 1138",
      "email": "mock1138.employee2df46e69-b040-4029-b65f-f31838645b8e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1138.employee2df46e69-b040-4029-b65f-f31838645b8e@mock.com",
            "firstName": "Mock 1138",
            "lastName": "Associate 1138"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1394",
      "lastName": "Associate 1394",
      "email": "mock1394.employee37cfe1d8-1903-431c-b198-1ad679c14a45@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1394.employee37cfe1d8-1903-431c-b198-1ad679c14a45@mock.com",
            "firstName": "Mock 1394",
            "lastName": "Associate 1394"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1035",
      "lastName": "Associate 1035",
      "email": "mock1035.employee76394e6a-4835-4478-bb75-c0d3ffa574b1@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1035.employee76394e6a-4835-4478-bb75-c0d3ffa574b1@mock.com",
            "firstName": "Mock 1035",
            "lastName": "Associate 1035"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1041",
      "lastName": "Associate 1041",
      "email": "mock1041.employeeb7658cdb-9ab4-4958-a721-324615f88579@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1041.employeeb7658cdb-9ab4-4958-a721-324615f88579@mock.com",
            "firstName": "Mock 1041",
            "lastName": "Associate 1041"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1131",
      "lastName": "Associate 1131",
      "email": "mock1131.employeeecc94550-4c68-44de-b354-8bed7b2823b3@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1131.employeeecc94550-4c68-44de-b354-8bed7b2823b3@mock.com",
            "firstName": "Mock 1131",
            "lastName": "Associate 1131"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1352",
      "lastName": "Associate 1352",
      "email": "mock1352.employeea359b48f-9f0f-4d0e-b339-61864e9a5e54@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1352.employeea359b48f-9f0f-4d0e-b339-61864e9a5e54@mock.com",
            "firstName": "Mock 1352",
            "lastName": "Associate 1352"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1153",
      "lastName": "Associate 1153",
      "email": "mock1153.employeed41d7ea5-aa1c-431f-91d5-137f71760d00@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1153.employeed41d7ea5-aa1c-431f-91d5-137f71760d00@mock.com",
            "firstName": "Mock 1153",
            "lastName": "Associate 1153"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1063",
      "lastName": "Associate 1063",
      "email": "mock1063.employeefd3e1d74-104f-47fe-9bb4-840009ba65c9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1063.employeefd3e1d74-104f-47fe-9bb4-840009ba65c9@mock.com",
            "firstName": "Mock 1063",
            "lastName": "Associate 1063"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1426",
      "lastName": "Associate 1426",
      "email": "mock1426.employeec52d3c38-9642-4a66-85db-94f8252f5092@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1426.employeec52d3c38-9642-4a66-85db-94f8252f5092@mock.com",
            "firstName": "Mock 1426",
            "lastName": "Associate 1426"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1384",
      "lastName": "Associate 1384",
      "email": "mock1384.employeec8c254e1-a31a-410d-8402-e10ce41eb78d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1384.employeec8c254e1-a31a-410d-8402-e10ce41eb78d@mock.com",
            "firstName": "Mock 1384",
            "lastName": "Associate 1384"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1340",
      "lastName": "Associate 1340",
      "email": "mock1340.employee6210308e-b3b8-4d39-a92a-ddc391169a5d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1340.employee6210308e-b3b8-4d39-a92a-ddc391169a5d@mock.com",
            "firstName": "Mock 1340",
            "lastName": "Associate 1340"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1080",
      "lastName": "Associate 1080",
      "email": "mock1080.employee952190f8-55a9-4a91-a991-220a6bb1d330@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1080.employee952190f8-55a9-4a91-a991-220a6bb1d330@mock.com",
            "firstName": "Mock 1080",
            "lastName": "Associate 1080"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1295",
      "lastName": "Associate 1295",
      "email": "mock1295.employee5cd3b1c1-73da-45b0-b8e6-ea876c09690d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1295.employee5cd3b1c1-73da-45b0-b8e6-ea876c09690d@mock.com",
            "firstName": "Mock 1295",
            "lastName": "Associate 1295"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1260",
      "lastName": "Associate 1260",
      "email": "mock1260.employeef63da562-67f0-41a9-a2c5-be23adf3fbe4@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1260.employeef63da562-67f0-41a9-a2c5-be23adf3fbe4@mock.com",
            "firstName": "Mock 1260",
            "lastName": "Associate 1260"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1464",
      "lastName": "Associate 1464",
      "email": "mock1464.employeed95a1cda-fcce-4d45-a815-23fb0e365c83@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1464.employeed95a1cda-fcce-4d45-a815-23fb0e365c83@mock.com",
            "firstName": "Mock 1464",
            "lastName": "Associate 1464"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1237",
      "lastName": "Associate 1237",
      "email": "mock1237.employeec47f925b-83c7-41f9-ac69-9beeebb6c464@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1237.employeec47f925b-83c7-41f9-ac69-9beeebb6c464@mock.com",
            "firstName": "Mock 1237",
            "lastName": "Associate 1237"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1397",
      "lastName": "Associate 1397",
      "email": "mock1397.employee2a903f8a-9fc1-4f2e-af93-f240a46fb59e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1397.employee2a903f8a-9fc1-4f2e-af93-f240a46fb59e@mock.com",
            "firstName": "Mock 1397",
            "lastName": "Associate 1397"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1282",
      "lastName": "Associate 1282",
      "email": "mock1282.employeeb709fa81-2508-4b76-8fc1-07111434b522@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1282.employeeb709fa81-2508-4b76-8fc1-07111434b522@mock.com",
            "firstName": "Mock 1282",
            "lastName": "Associate 1282"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1136",
      "lastName": "Associate 1136",
      "email": "mock1136.employee0bdc95e9-5514-41c4-a568-4b30752245e7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1136.employee0bdc95e9-5514-41c4-a568-4b30752245e7@mock.com",
            "firstName": "Mock 1136",
            "lastName": "Associate 1136"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1206",
      "lastName": "Associate 1206",
      "email": "mock1206.employeec8cf945e-b6eb-4c97-8869-467f9779dabc@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1206.employeec8cf945e-b6eb-4c97-8869-467f9779dabc@mock.com",
            "firstName": "Mock 1206",
            "lastName": "Associate 1206"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1143",
      "lastName": "Associate 1143",
      "email": "mock1143.employeeb4530954-d7da-4dd5-80d3-154a09214a59@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1143.employeeb4530954-d7da-4dd5-80d3-154a09214a59@mock.com",
            "firstName": "Mock 1143",
            "lastName": "Associate 1143"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1375",
      "lastName": "Associate 1375",
      "email": "mock1375.employeee7fd0cca-29db-4ae9-b399-32785ffb5c24@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1375.employeee7fd0cca-29db-4ae9-b399-32785ffb5c24@mock.com",
            "firstName": "Mock 1375",
            "lastName": "Associate 1375"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1339",
      "lastName": "Associate 1339",
      "email": "mock1339.employee326ade9b-2e73-4088-ba3a-d80328708ef9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1339.employee326ade9b-2e73-4088-ba3a-d80328708ef9@mock.com",
            "firstName": "Mock 1339",
            "lastName": "Associate 1339"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1437",
      "lastName": "Associate 1437",
      "email": "mock1437.employee3ed7789e-aec5-47b3-ad2e-e1ec311e9f72@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1437.employee3ed7789e-aec5-47b3-ad2e-e1ec311e9f72@mock.com",
            "firstName": "Mock 1437",
            "lastName": "Associate 1437"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1473",
      "lastName": "Associate 1473",
      "email": "mock1473.employee9d0a097f-951b-410c-861b-c08226508f0a@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1473.employee9d0a097f-951b-410c-861b-c08226508f0a@mock.com",
            "firstName": "Mock 1473",
            "lastName": "Associate 1473"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1458",
      "lastName": "Associate 1458",
      "email": "mock1458.employee0aab8fd8-766f-4127-afc6-be0360f31acb@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1458.employee0aab8fd8-766f-4127-afc6-be0360f31acb@mock.com",
            "firstName": "Mock 1458",
            "lastName": "Associate 1458"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1028",
      "lastName": "Associate 1028",
      "email": "mock1028.employee0f8f8809-69d0-474c-8969-f833844eea58@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1028.employee0f8f8809-69d0-474c-8969-f833844eea58@mock.com",
            "firstName": "Mock 1028",
            "lastName": "Associate 1028"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1281",
      "lastName": "Associate 1281",
      "email": "mock1281.employee4bedcc39-b134-4902-b530-8a9fb3b2387b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1281.employee4bedcc39-b134-4902-b530-8a9fb3b2387b@mock.com",
            "firstName": "Mock 1281",
            "lastName": "Associate 1281"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1198",
      "lastName": "Associate 1198",
      "email": "mock1198.employee0c167dba-5047-4f26-ab8a-b17682599bfd@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1198.employee0c167dba-5047-4f26-ab8a-b17682599bfd@mock.com",
            "firstName": "Mock 1198",
            "lastName": "Associate 1198"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1241",
      "lastName": "Associate 1241",
      "email": "mock1241.employee2af4dd11-f166-47e3-a1a4-a87ff5818630@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1241.employee2af4dd11-f166-47e3-a1a4-a87ff5818630@mock.com",
            "firstName": "Mock 1241",
            "lastName": "Associate 1241"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1255",
      "lastName": "Associate 1255",
      "email": "mock1255.employee2eee75cc-e34d-43e9-bedb-e0fe25f3e7ed@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1255.employee2eee75cc-e34d-43e9-bedb-e0fe25f3e7ed@mock.com",
            "firstName": "Mock 1255",
            "lastName": "Associate 1255"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1343",
      "lastName": "Associate 1343",
      "email": "mock1343.employeebc5f8cd5-fb59-4e5d-9b7f-5bd3adbcf6d0@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1343.employeebc5f8cd5-fb59-4e5d-9b7f-5bd3adbcf6d0@mock.com",
            "firstName": "Mock 1343",
            "lastName": "Associate 1343"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1347",
      "lastName": "Associate 1347",
      "email": "mock1347.employeeccc93bc2-76e1-4e3e-8265-f9036f677ab1@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1347.employeeccc93bc2-76e1-4e3e-8265-f9036f677ab1@mock.com",
            "firstName": "Mock 1347",
            "lastName": "Associate 1347"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1441",
      "lastName": "Associate 1441",
      "email": "mock1441.employee89edd947-ecb3-4b87-b7f3-81f2fab3daf3@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1441.employee89edd947-ecb3-4b87-b7f3-81f2fab3daf3@mock.com",
            "firstName": "Mock 1441",
            "lastName": "Associate 1441"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1053",
      "lastName": "Associate 1053",
      "email": "mock1053.employee54c34d8d-cdbe-4a09-83e5-fb3d955b6243@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1053.employee54c34d8d-cdbe-4a09-83e5-fb3d955b6243@mock.com",
            "firstName": "Mock 1053",
            "lastName": "Associate 1053"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1187",
      "lastName": "Associate 1187",
      "email": "mock1187.employee56c504a2-4f35-4cb2-91a3-aeeb9786345f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1187.employee56c504a2-4f35-4cb2-91a3-aeeb9786345f@mock.com",
            "firstName": "Mock 1187",
            "lastName": "Associate 1187"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1491",
      "lastName": "Associate 1491",
      "email": "mock1491.employeeb559d70a-1142-4edd-8d31-f4473af57feb@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1491.employeeb559d70a-1142-4edd-8d31-f4473af57feb@mock.com",
            "firstName": "Mock 1491",
            "lastName": "Associate 1491"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1386",
      "lastName": "Associate 1386",
      "email": "mock1386.employee96bc65bf-fccd-492b-891f-0afc4ecc2626@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1386.employee96bc65bf-fccd-492b-891f-0afc4ecc2626@mock.com",
            "firstName": "Mock 1386",
            "lastName": "Associate 1386"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1145",
      "lastName": "Associate 1145",
      "email": "mock1145.employee761581ff-9d5d-4358-ae16-b05aeefc8a16@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1145.employee761581ff-9d5d-4358-ae16-b05aeefc8a16@mock.com",
            "firstName": "Mock 1145",
            "lastName": "Associate 1145"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1208",
      "lastName": "Associate 1208",
      "email": "mock1208.employee8351d67f-ab8e-4803-95a7-e693d02eb633@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1208.employee8351d67f-ab8e-4803-95a7-e693d02eb633@mock.com",
            "firstName": "Mock 1208",
            "lastName": "Associate 1208"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1096",
      "lastName": "Associate 1096",
      "email": "mock1096.employee7dc167fb-09cb-4036-917e-24530d376db5@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1096.employee7dc167fb-09cb-4036-917e-24530d376db5@mock.com",
            "firstName": "Mock 1096",
            "lastName": "Associate 1096"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1211",
      "lastName": "Associate 1211",
      "email": "mock1211.employeeca10f6ea-a211-49d2-ab3e-8e2ef45d639c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1211.employeeca10f6ea-a211-49d2-ab3e-8e2ef45d639c@mock.com",
            "firstName": "Mock 1211",
            "lastName": "Associate 1211"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1414",
      "lastName": "Associate 1414",
      "email": "mock1414.employee81ff8d4f-437c-4902-a1c4-b6fe3d904221@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1414.employee81ff8d4f-437c-4902-a1c4-b6fe3d904221@mock.com",
            "firstName": "Mock 1414",
            "lastName": "Associate 1414"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1006",
      "lastName": "Associate 1006",
      "email": "mock1006.employeedb14fe5a-48ec-4c1a-b4b2-ee9e7cba9c01@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1006.employeedb14fe5a-48ec-4c1a-b4b2-ee9e7cba9c01@mock.com",
            "firstName": "Mock 1006",
            "lastName": "Associate 1006"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1120",
      "lastName": "Associate 1120",
      "email": "mock1120.employeeb8bb5e88-55d4-4c93-b5c4-d7d5ab4187ec@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1120.employeeb8bb5e88-55d4-4c93-b5c4-d7d5ab4187ec@mock.com",
            "firstName": "Mock 1120",
            "lastName": "Associate 1120"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1067",
      "lastName": "Associate 1067",
      "email": "mock1067.employeeb4b30edd-fe44-4996-b81b-439ab707b03b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1067.employeeb4b30edd-fe44-4996-b81b-439ab707b03b@mock.com",
            "firstName": "Mock 1067",
            "lastName": "Associate 1067"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1461",
      "lastName": "Associate 1461",
      "email": "mock1461.employeeb7cc76ae-4e94-490d-952c-07fa4db027a7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1461.employeeb7cc76ae-4e94-490d-952c-07fa4db027a7@mock.com",
            "firstName": "Mock 1461",
            "lastName": "Associate 1461"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1212",
      "lastName": "Associate 1212",
      "email": "mock1212.employee916b1738-a6d1-4342-9dd4-c0362e15620c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1212.employee916b1738-a6d1-4342-9dd4-c0362e15620c@mock.com",
            "firstName": "Mock 1212",
            "lastName": "Associate 1212"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1364",
      "lastName": "Associate 1364",
      "email": "mock1364.employeea078a7a5-45fd-438e-8110-d87e85096730@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1364.employeea078a7a5-45fd-438e-8110-d87e85096730@mock.com",
            "firstName": "Mock 1364",
            "lastName": "Associate 1364"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1273",
      "lastName": "Associate 1273",
      "email": "mock1273.employeec7503bee-71f5-44e3-9533-efe28f7aaf2b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1273.employeec7503bee-71f5-44e3-9533-efe28f7aaf2b@mock.com",
            "firstName": "Mock 1273",
            "lastName": "Associate 1273"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1040",
      "lastName": "Associate 1040",
      "email": "mock1040.employee2c9f6f0d-84a1-432b-9bca-015627e6a338@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1040.employee2c9f6f0d-84a1-432b-9bca-015627e6a338@mock.com",
            "firstName": "Mock 1040",
            "lastName": "Associate 1040"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1246",
      "lastName": "Associate 1246",
      "email": "mock1246.employee09aba9b4-e12a-43ec-bb37-1da1f95e0480@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1246.employee09aba9b4-e12a-43ec-bb37-1da1f95e0480@mock.com",
            "firstName": "Mock 1246",
            "lastName": "Associate 1246"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1329",
      "lastName": "Associate 1329",
      "email": "mock1329.employee9edd492c-466c-42f6-aa1c-3b0db06b7105@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1329.employee9edd492c-466c-42f6-aa1c-3b0db06b7105@mock.com",
            "firstName": "Mock 1329",
            "lastName": "Associate 1329"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1399",
      "lastName": "Associate 1399",
      "email": "mock1399.employee356ff80b-e867-458c-b20f-ea407196e1f9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1399.employee356ff80b-e867-458c-b20f-ea407196e1f9@mock.com",
            "firstName": "Mock 1399",
            "lastName": "Associate 1399"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1485",
      "lastName": "Associate 1485",
      "email": "mock1485.employee2a05ab4c-3815-4716-922a-80f79fb06e2c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1485.employee2a05ab4c-3815-4716-922a-80f79fb06e2c@mock.com",
            "firstName": "Mock 1485",
            "lastName": "Associate 1485"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1065",
      "lastName": "Associate 1065",
      "email": "mock1065.employee3ddbddea-7e1c-41e9-9627-303d1606f647@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1065.employee3ddbddea-7e1c-41e9-9627-303d1606f647@mock.com",
            "firstName": "Mock 1065",
            "lastName": "Associate 1065"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1231",
      "lastName": "Associate 1231",
      "email": "mock1231.employeea8b43ab6-9535-4b56-8066-1df421c0e062@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1231.employeea8b43ab6-9535-4b56-8066-1df421c0e062@mock.com",
            "firstName": "Mock 1231",
            "lastName": "Associate 1231"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1353",
      "lastName": "Associate 1353",
      "email": "mock1353.employeeb63ea604-c2ec-42a5-b40f-767f62225af8@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1353.employeeb63ea604-c2ec-42a5-b40f-767f62225af8@mock.com",
            "firstName": "Mock 1353",
            "lastName": "Associate 1353"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1148",
      "lastName": "Associate 1148",
      "email": "mock1148.employeeb11d79f3-1c05-49b2-906d-d639a16302bb@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1148.employeeb11d79f3-1c05-49b2-906d-d639a16302bb@mock.com",
            "firstName": "Mock 1148",
            "lastName": "Associate 1148"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1415",
      "lastName": "Associate 1415",
      "email": "mock1415.employee0710216c-452d-4780-95f5-cd690da405ac@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1415.employee0710216c-452d-4780-95f5-cd690da405ac@mock.com",
            "firstName": "Mock 1415",
            "lastName": "Associate 1415"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1297",
      "lastName": "Associate 1297",
      "email": "mock1297.employee864bf49c-3c90-4ab6-85ba-d07ecb8574ab@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1297.employee864bf49c-3c90-4ab6-85ba-d07ecb8574ab@mock.com",
            "firstName": "Mock 1297",
            "lastName": "Associate 1297"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1108",
      "lastName": "Associate 1108",
      "email": "mock1108.employeec4b4e8df-4aab-4580-b648-ba9ae4de824a@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1108.employeec4b4e8df-4aab-4580-b648-ba9ae4de824a@mock.com",
            "firstName": "Mock 1108",
            "lastName": "Associate 1108"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1392",
      "lastName": "Associate 1392",
      "email": "mock1392.employeed8d30ee6-9613-438a-aaa0-eee4c475679b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1392.employeed8d30ee6-9613-438a-aaa0-eee4c475679b@mock.com",
            "firstName": "Mock 1392",
            "lastName": "Associate 1392"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1480",
      "lastName": "Associate 1480",
      "email": "mock1480.employee595d8cca-203f-4d8c-b45f-f0698431c647@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1480.employee595d8cca-203f-4d8c-b45f-f0698431c647@mock.com",
            "firstName": "Mock 1480",
            "lastName": "Associate 1480"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1036",
      "lastName": "Associate 1036",
      "email": "mock1036.employeec9a1de8a-be16-42d7-b64b-a9d39a06ce5e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1036.employeec9a1de8a-be16-42d7-b64b-a9d39a06ce5e@mock.com",
            "firstName": "Mock 1036",
            "lastName": "Associate 1036"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1358",
      "lastName": "Associate 1358",
      "email": "mock1358.employee152d3365-208a-4be2-b16e-d1dbfaa879e2@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1358.employee152d3365-208a-4be2-b16e-d1dbfaa879e2@mock.com",
            "firstName": "Mock 1358",
            "lastName": "Associate 1358"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1316",
      "lastName": "Associate 1316",
      "email": "mock1316.employeefd0125e6-9582-4ddb-b282-95666faca88e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1316.employeefd0125e6-9582-4ddb-b282-95666faca88e@mock.com",
            "firstName": "Mock 1316",
            "lastName": "Associate 1316"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1103",
      "lastName": "Associate 1103",
      "email": "mock1103.employee5eb47bc0-5589-47a1-981a-64a00a902303@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1103.employee5eb47bc0-5589-47a1-981a-64a00a902303@mock.com",
            "firstName": "Mock 1103",
            "lastName": "Associate 1103"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1160",
      "lastName": "Associate 1160",
      "email": "mock1160.employee8fabe590-c9b3-4ad0-a8f1-581fc675ce77@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1160.employee8fabe590-c9b3-4ad0-a8f1-581fc675ce77@mock.com",
            "firstName": "Mock 1160",
            "lastName": "Associate 1160"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1119",
      "lastName": "Associate 1119",
      "email": "mock1119.employeeff3fc831-968c-407e-8e71-4eafabbf125c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1119.employeeff3fc831-968c-407e-8e71-4eafabbf125c@mock.com",
            "firstName": "Mock 1119",
            "lastName": "Associate 1119"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1118",
      "lastName": "Associate 1118",
      "email": "mock1118.employee4413083d-a299-4c9a-a453-9593c75d7244@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1118.employee4413083d-a299-4c9a-a453-9593c75d7244@mock.com",
            "firstName": "Mock 1118",
            "lastName": "Associate 1118"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1188",
      "lastName": "Associate 1188",
      "email": "mock1188.employee4dc6bbf9-183d-4efe-905a-31c850e10c85@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1188.employee4dc6bbf9-183d-4efe-905a-31c850e10c85@mock.com",
            "firstName": "Mock 1188",
            "lastName": "Associate 1188"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1005",
      "lastName": "Associate 1005",
      "email": "mock1005.employeee7113d5c-c49c-4fd6-b5eb-729bf54a5b6c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1005.employeee7113d5c-c49c-4fd6-b5eb-729bf54a5b6c@mock.com",
            "firstName": "Mock 1005",
            "lastName": "Associate 1005"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1240",
      "lastName": "Associate 1240",
      "email": "mock1240.employee19fce946-e19d-4fec-94ac-f394728b490e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1240.employee19fce946-e19d-4fec-94ac-f394728b490e@mock.com",
            "firstName": "Mock 1240",
            "lastName": "Associate 1240"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1122",
      "lastName": "Associate 1122",
      "email": "mock1122.employee49521acf-4a8b-4539-b679-784f37dda99d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1122.employee49521acf-4a8b-4539-b679-784f37dda99d@mock.com",
            "firstName": "Mock 1122",
            "lastName": "Associate 1122"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1478",
      "lastName": "Associate 1478",
      "email": "mock1478.employeef597e9c0-fe0c-47bf-a9c0-dd1b80333942@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1478.employeef597e9c0-fe0c-47bf-a9c0-dd1b80333942@mock.com",
            "firstName": "Mock 1478",
            "lastName": "Associate 1478"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1132",
      "lastName": "Associate 1132",
      "email": "mock1132.employee9082efb7-b974-442a-b35d-99f21691a080@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1132.employee9082efb7-b974-442a-b35d-99f21691a080@mock.com",
            "firstName": "Mock 1132",
            "lastName": "Associate 1132"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1265",
      "lastName": "Associate 1265",
      "email": "mock1265.employee580c4bb2-7589-4dd3-9408-2f52de97eb9e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1265.employee580c4bb2-7589-4dd3-9408-2f52de97eb9e@mock.com",
            "firstName": "Mock 1265",
            "lastName": "Associate 1265"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1195",
      "lastName": "Associate 1195",
      "email": "mock1195.employeebe2a5aa8-d9f6-461b-aa2c-6e492ab92f8b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1195.employeebe2a5aa8-d9f6-461b-aa2c-6e492ab92f8b@mock.com",
            "firstName": "Mock 1195",
            "lastName": "Associate 1195"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1177",
      "lastName": "Associate 1177",
      "email": "mock1177.employeedc491539-7ade-4b21-b276-1c498878e18e@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1177.employeedc491539-7ade-4b21-b276-1c498878e18e@mock.com",
            "firstName": "Mock 1177",
            "lastName": "Associate 1177"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1163",
      "lastName": "Associate 1163",
      "email": "mock1163.employee1b3ab6ee-e0fc-4858-a041-11a91656ac96@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1163.employee1b3ab6ee-e0fc-4858-a041-11a91656ac96@mock.com",
            "firstName": "Mock 1163",
            "lastName": "Associate 1163"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1267",
      "lastName": "Associate 1267",
      "email": "mock1267.employeebc150bcf-bf01-4fd4-b423-4e910b59b56c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1267.employeebc150bcf-bf01-4fd4-b423-4e910b59b56c@mock.com",
            "firstName": "Mock 1267",
            "lastName": "Associate 1267"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1109",
      "lastName": "Associate 1109",
      "email": "mock1109.employee65b71bf4-b293-4462-b132-2beac580c613@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1109.employee65b71bf4-b293-4462-b132-2beac580c613@mock.com",
            "firstName": "Mock 1109",
            "lastName": "Associate 1109"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1196",
      "lastName": "Associate 1196",
      "email": "mock1196.employee2b64f849-622b-4381-bdd9-e0b92c5b876b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1196.employee2b64f849-622b-4381-bdd9-e0b92c5b876b@mock.com",
            "firstName": "Mock 1196",
            "lastName": "Associate 1196"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1076",
      "lastName": "Associate 1076",
      "email": "mock1076.employeeabfd1983-9fc0-4051-b842-b9f69c1a9c69@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1076.employeeabfd1983-9fc0-4051-b842-b9f69c1a9c69@mock.com",
            "firstName": "Mock 1076",
            "lastName": "Associate 1076"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1388",
      "lastName": "Associate 1388",
      "email": "mock1388.employee5a30404f-edc0-455f-af67-541882cd0a6d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1388.employee5a30404f-edc0-455f-af67-541882cd0a6d@mock.com",
            "firstName": "Mock 1388",
            "lastName": "Associate 1388"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1015",
      "lastName": "Associate 1015",
      "email": "mock1015.employeec8d11d43-fee4-47f6-931f-3e2b1a7d5e9c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1015.employeec8d11d43-fee4-47f6-931f-3e2b1a7d5e9c@mock.com",
            "firstName": "Mock 1015",
            "lastName": "Associate 1015"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1098",
      "lastName": "Associate 1098",
      "email": "mock1098.employee721c2024-3e12-431a-9d63-02be96749b0f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1098.employee721c2024-3e12-431a-9d63-02be96749b0f@mock.com",
            "firstName": "Mock 1098",
            "lastName": "Associate 1098"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1336",
      "lastName": "Associate 1336",
      "email": "mock1336.employee9d8821ec-952c-4871-95f6-013ce5ae6eea@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1336.employee9d8821ec-952c-4871-95f6-013ce5ae6eea@mock.com",
            "firstName": "Mock 1336",
            "lastName": "Associate 1336"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1451",
      "lastName": "Associate 1451",
      "email": "mock1451.employee6f6541a1-938a-4745-932e-7829b30a1237@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1451.employee6f6541a1-938a-4745-932e-7829b30a1237@mock.com",
            "firstName": "Mock 1451",
            "lastName": "Associate 1451"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1249",
      "lastName": "Associate 1249",
      "email": "mock1249.employeebc063ada-0cc3-4710-ac09-67bda386e2be@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1249.employeebc063ada-0cc3-4710-ac09-67bda386e2be@mock.com",
            "firstName": "Mock 1249",
            "lastName": "Associate 1249"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1164",
      "lastName": "Associate 1164",
      "email": "mock1164.employee01af9b0a-438f-4b58-863c-4608e526d57a@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1164.employee01af9b0a-438f-4b58-863c-4608e526d57a@mock.com",
            "firstName": "Mock 1164",
            "lastName": "Associate 1164"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1062",
      "lastName": "Associate 1062",
      "email": "mock1062.employeebc226e26-edc7-49da-ac7a-6aeb8248eb09@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1062.employeebc226e26-edc7-49da-ac7a-6aeb8248eb09@mock.com",
            "firstName": "Mock 1062",
            "lastName": "Associate 1062"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1393",
      "lastName": "Associate 1393",
      "email": "mock1393.employee2c708e74-286d-4ba2-a74f-747545382a73@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1393.employee2c708e74-286d-4ba2-a74f-747545382a73@mock.com",
            "firstName": "Mock 1393",
            "lastName": "Associate 1393"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1250",
      "lastName": "Associate 1250",
      "email": "mock1250.employee6710b524-d1e4-4202-9ff3-361127312ba1@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1250.employee6710b524-d1e4-4202-9ff3-361127312ba1@mock.com",
            "firstName": "Mock 1250",
            "lastName": "Associate 1250"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1442",
      "lastName": "Associate 1442",
      "email": "mock1442.employee32891f76-76af-4271-a352-7569f771c4ea@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1442.employee32891f76-76af-4271-a352-7569f771c4ea@mock.com",
            "firstName": "Mock 1442",
            "lastName": "Associate 1442"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1165",
      "lastName": "Associate 1165",
      "email": "mock1165.employee6dcdbe4d-d60f-41fe-9d1d-3940fb42a284@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1165.employee6dcdbe4d-d60f-41fe-9d1d-3940fb42a284@mock.com",
            "firstName": "Mock 1165",
            "lastName": "Associate 1165"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1221",
      "lastName": "Associate 1221",
      "email": "mock1221.employee0c142dd1-dde0-4422-8f59-beae75630a4a@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1221.employee0c142dd1-dde0-4422-8f59-beae75630a4a@mock.com",
            "firstName": "Mock 1221",
            "lastName": "Associate 1221"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1299",
      "lastName": "Associate 1299",
      "email": "mock1299.employee800abdf4-49e1-4590-a753-4f340a97472d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1299.employee800abdf4-49e1-4590-a753-4f340a97472d@mock.com",
            "firstName": "Mock 1299",
            "lastName": "Associate 1299"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1268",
      "lastName": "Associate 1268",
      "email": "mock1268.employeeabf29f5e-ad91-4955-9fce-f24446640b1f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1268.employeeabf29f5e-ad91-4955-9fce-f24446640b1f@mock.com",
            "firstName": "Mock 1268",
            "lastName": "Associate 1268"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1434",
      "lastName": "Associate 1434",
      "email": "mock1434.employeece8baa65-02bf-47ea-9118-3957be35ad79@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1434.employeece8baa65-02bf-47ea-9118-3957be35ad79@mock.com",
            "firstName": "Mock 1434",
            "lastName": "Associate 1434"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1314",
      "lastName": "Associate 1314",
      "email": "mock1314.employeebce21839-b9b8-44c9-82e5-ffa7b73bc8cb@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1314.employeebce21839-b9b8-44c9-82e5-ffa7b73bc8cb@mock.com",
            "firstName": "Mock 1314",
            "lastName": "Associate 1314"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1498",
      "lastName": "Associate 1498",
      "email": "mock1498.employee2d7cff6a-f571-4694-bc17-8b1499f042de@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1498.employee2d7cff6a-f571-4694-bc17-8b1499f042de@mock.com",
            "firstName": "Mock 1498",
            "lastName": "Associate 1498"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1253",
      "lastName": "Associate 1253",
      "email": "mock1253.employee4f6e5ec9-28c6-4e37-893c-ece9b8d487a7@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1253.employee4f6e5ec9-28c6-4e37-893c-ece9b8d487a7@mock.com",
            "firstName": "Mock 1253",
            "lastName": "Associate 1253"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1290",
      "lastName": "Associate 1290",
      "email": "mock1290.employee8a8b3fda-2acd-4b75-b772-808ec1e81bd9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1290.employee8a8b3fda-2acd-4b75-b772-808ec1e81bd9@mock.com",
            "firstName": "Mock 1290",
            "lastName": "Associate 1290"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1170",
      "lastName": "Associate 1170",
      "email": "mock1170.employee7537b19c-97a5-4689-8df7-b65c53d4026d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1170.employee7537b19c-97a5-4689-8df7-b65c53d4026d@mock.com",
            "firstName": "Mock 1170",
            "lastName": "Associate 1170"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1066",
      "lastName": "Associate 1066",
      "email": "mock1066.employeeaf05644a-5df7-4789-be65-914734323f60@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1066.employeeaf05644a-5df7-4789-be65-914734323f60@mock.com",
            "firstName": "Mock 1066",
            "lastName": "Associate 1066"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1227",
      "lastName": "Associate 1227",
      "email": "mock1227.employee559ffc55-3286-4520-8e56-b0789e4007c3@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1227.employee559ffc55-3286-4520-8e56-b0789e4007c3@mock.com",
            "firstName": "Mock 1227",
            "lastName": "Associate 1227"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1001",
      "lastName": "Associate 1001",
      "email": "mock1001.employee401ab964-6d59-4601-b221-84b3f07eda76@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1001.employee401ab964-6d59-4601-b221-84b3f07eda76@mock.com",
            "firstName": "Mock 1001",
            "lastName": "Associate 1001"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1278",
      "lastName": "Associate 1278",
      "email": "mock1278.employee119f435f-1122-48da-8100-37f8b750689b@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1278.employee119f435f-1122-48da-8100-37f8b750689b@mock.com",
            "firstName": "Mock 1278",
            "lastName": "Associate 1278"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1440",
      "lastName": "Associate 1440",
      "email": "mock1440.employee45a6998a-5501-4aa7-8778-6b8212073c32@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1440.employee45a6998a-5501-4aa7-8778-6b8212073c32@mock.com",
            "firstName": "Mock 1440",
            "lastName": "Associate 1440"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1236",
      "lastName": "Associate 1236",
      "email": "mock1236.employee48ad508c-b5ce-45a5-93f0-dfd6e966feb0@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1236.employee48ad508c-b5ce-45a5-93f0-dfd6e966feb0@mock.com",
            "firstName": "Mock 1236",
            "lastName": "Associate 1236"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1489",
      "lastName": "Associate 1489",
      "email": "mock1489.employee632059b7-5ae4-4324-8e43-ed9f48c3bc2c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1489.employee632059b7-5ae4-4324-8e43-ed9f48c3bc2c@mock.com",
            "firstName": "Mock 1489",
            "lastName": "Associate 1489"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1052",
      "lastName": "Associate 1052",
      "email": "mock1052.employeee514dc78-b29b-437c-ae3e-7e0dcb791fd5@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1052.employeee514dc78-b29b-437c-ae3e-7e0dcb791fd5@mock.com",
            "firstName": "Mock 1052",
            "lastName": "Associate 1052"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1377",
      "lastName": "Associate 1377",
      "email": "mock1377.employeeaf83736a-617a-4045-bdf2-66160e8cd818@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1377.employeeaf83736a-617a-4045-bdf2-66160e8cd818@mock.com",
            "firstName": "Mock 1377",
            "lastName": "Associate 1377"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1061",
      "lastName": "Associate 1061",
      "email": "mock1061.employee508b8fd3-a808-4053-9b1b-1da4a4b98ad9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1061.employee508b8fd3-a808-4053-9b1b-1da4a4b98ad9@mock.com",
            "firstName": "Mock 1061",
            "lastName": "Associate 1061"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1031",
      "lastName": "Associate 1031",
      "email": "mock1031.employee77be469b-cbde-4ed0-a7c5-3b91d4ff2782@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1031.employee77be469b-cbde-4ed0-a7c5-3b91d4ff2782@mock.com",
            "firstName": "Mock 1031",
            "lastName": "Associate 1031"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1252",
      "lastName": "Associate 1252",
      "email": "mock1252.employee6d2afc60-8c59-4abb-99a5-dbc3935182d4@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1252.employee6d2afc60-8c59-4abb-99a5-dbc3935182d4@mock.com",
            "firstName": "Mock 1252",
            "lastName": "Associate 1252"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1306",
      "lastName": "Associate 1306",
      "email": "mock1306.employee692954e0-00a9-475f-b910-06fbd0d762db@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1306.employee692954e0-00a9-475f-b910-06fbd0d762db@mock.com",
            "firstName": "Mock 1306",
            "lastName": "Associate 1306"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1214",
      "lastName": "Associate 1214",
      "email": "mock1214.employee9f6736e3-4b63-4fc9-acad-223f03ae6266@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1214.employee9f6736e3-4b63-4fc9-acad-223f03ae6266@mock.com",
            "firstName": "Mock 1214",
            "lastName": "Associate 1214"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1059",
      "lastName": "Associate 1059",
      "email": "mock1059.employeeb37fa06b-86e8-44ee-bebf-ae212dcf56b3@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1059.employeeb37fa06b-86e8-44ee-bebf-ae212dcf56b3@mock.com",
            "firstName": "Mock 1059",
            "lastName": "Associate 1059"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1133",
      "lastName": "Associate 1133",
      "email": "mock1133.employee22b4eb50-abcf-4050-86bc-7f81fdb67a30@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1133.employee22b4eb50-abcf-4050-86bc-7f81fdb67a30@mock.com",
            "firstName": "Mock 1133",
            "lastName": "Associate 1133"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1147",
      "lastName": "Associate 1147",
      "email": "mock1147.employee25f4bfbb-2623-4771-8201-d249604de4ac@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1147.employee25f4bfbb-2623-4771-8201-d249604de4ac@mock.com",
            "firstName": "Mock 1147",
            "lastName": "Associate 1147"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1079",
      "lastName": "Associate 1079",
      "email": "mock1079.employeeb5f8098d-2ec1-43df-99b1-b65626e23df3@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1079.employeeb5f8098d-2ec1-43df-99b1-b65626e23df3@mock.com",
            "firstName": "Mock 1079",
            "lastName": "Associate 1079"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1168",
      "lastName": "Associate 1168",
      "email": "mock1168.employeea99ccc72-c01a-420c-ad1a-42557cef2ecb@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1168.employeea99ccc72-c01a-420c-ad1a-42557cef2ecb@mock.com",
            "firstName": "Mock 1168",
            "lastName": "Associate 1168"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1251",
      "lastName": "Associate 1251",
      "email": "mock1251.employee34429a15-e5db-49c2-b571-55a9d6c3396c@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1251.employee34429a15-e5db-49c2-b571-55a9d6c3396c@mock.com",
            "firstName": "Mock 1251",
            "lastName": "Associate 1251"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1081",
      "lastName": "Associate 1081",
      "email": "mock1081.employee773f5746-abab-40fe-ae72-19bd0b863e96@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1081.employee773f5746-abab-40fe-ae72-19bd0b863e96@mock.com",
            "firstName": "Mock 1081",
            "lastName": "Associate 1081"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1029",
      "lastName": "Associate 1029",
      "email": "mock1029.employeefe1647ca-9d03-42f2-af24-040dbb67830a@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1029.employeefe1647ca-9d03-42f2-af24-040dbb67830a@mock.com",
            "firstName": "Mock 1029",
            "lastName": "Associate 1029"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1056",
      "lastName": "Associate 1056",
      "email": "mock1056.employeed73639b4-09b7-461f-9358-b3e4a5b589f9@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1056.employeed73639b4-09b7-461f-9358-b3e4a5b589f9@mock.com",
            "firstName": "Mock 1056",
            "lastName": "Associate 1056"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1101",
      "lastName": "Associate 1101",
      "email": "mock1101.employee3e979842-806b-4f9b-9141-90648303a5f0@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1101.employee3e979842-806b-4f9b-9141-90648303a5f0@mock.com",
            "firstName": "Mock 1101",
            "lastName": "Associate 1101"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1409",
      "lastName": "Associate 1409",
      "email": "mock1409.employee59fe58f7-b256-4cc8-af2e-c24fc42807dd@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1409.employee59fe58f7-b256-4cc8-af2e-c24fc42807dd@mock.com",
            "firstName": "Mock 1409",
            "lastName": "Associate 1409"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1350",
      "lastName": "Associate 1350",
      "email": "mock1350.employee08cbae52-e084-4d6f-8dae-2848a9a5cbbd@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1350.employee08cbae52-e084-4d6f-8dae-2848a9a5cbbd@mock.com",
            "firstName": "Mock 1350",
            "lastName": "Associate 1350"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1088",
      "lastName": "Associate 1088",
      "email": "mock1088.employee0d918153-fc96-41d9-9c99-61f23cc9535f@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1088.employee0d918153-fc96-41d9-9c99-61f23cc9535f@mock.com",
            "firstName": "Mock 1088",
            "lastName": "Associate 1088"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1169",
      "lastName": "Associate 1169",
      "email": "mock1169.employee16b3b758-48c2-4ca8-908a-a3e51e8b1e73@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1169.employee16b3b758-48c2-4ca8-908a-a3e51e8b1e73@mock.com",
            "firstName": "Mock 1169",
            "lastName": "Associate 1169"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1287",
      "lastName": "Associate 1287",
      "email": "mock1287.employee907ee385-12ad-4511-9134-7db606125b72@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1287.employee907ee385-12ad-4511-9134-7db606125b72@mock.com",
            "firstName": "Mock 1287",
            "lastName": "Associate 1287"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1107",
      "lastName": "Associate 1107",
      "email": "mock1107.employeed307deff-4119-469c-8a46-68c82cde54d0@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1107.employeed307deff-4119-469c-8a46-68c82cde54d0@mock.com",
            "firstName": "Mock 1107",
            "lastName": "Associate 1107"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1266",
      "lastName": "Associate 1266",
      "email": "mock1266.employeea41cd664-bc1f-4ea1-ac89-1a4ff1bdb5c3@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1266.employeea41cd664-bc1f-4ea1-ac89-1a4ff1bdb5c3@mock.com",
            "firstName": "Mock 1266",
            "lastName": "Associate 1266"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    },
    {
      "firstName": "Mock 1141",
      "lastName": "Associate 1141",
      "email": "mock1141.employeee60201d2-30e7-4c7a-9788-a97ff612143d@mock.com",
      "trainingBatches": [
        {
          "role": "ROLE_LEAD_TRAINER",
          "employee": {
            "email": "mock1141.employeee60201d2-30e7-4c7a-9788-a97ff612143d@mock.com",
            "firstName": "Mock 1141",
            "lastName": "Associate 1141"
          },
          "deletedAt": null
        }
      ],
      "tier": "ROLE_LEAD_TRAINER"
    }];

    getAllMockTrainers() : any[] {
      // sessionStorage.setItem("currentTrainers", JSON.stringify(this.trainers));
      return this.trainers;
    }
}
