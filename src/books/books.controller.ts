import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {

    @Get()
    getAllBooks() {
        return {
            data: [
                { id: '1', title: 'High Weirdness', author: { firstName: 'Eric', lastName: 'Davis' }, yearPublished: 2019 },
                { id: '2', title: 'Walden', author: { firstName: 'Henry', lastName: 'Thoreau' }, yearPublished: 1859 }
            ]
        }
    }
}
