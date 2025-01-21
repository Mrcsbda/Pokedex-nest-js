import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {

    @IsInt({
        message: 'no must to be an integer',
    })
    @IsPositive(
        {
            message: 'no must to be an positive integer',
        }
    )
    @Min(1, {
        message: 'no must to be greater than or equal to 1',
    })
    readonly no: number;

    @IsString()
    @MinLength(1, {
        message: 'name is too short',
    })
    readonly name: string;
}
