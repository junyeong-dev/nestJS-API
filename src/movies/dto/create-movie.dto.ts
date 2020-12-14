import { IsString, IsNumber, IsOptional } from "class-validator";

// DTO : Data Transfer Object 계층간 데이터 교환을 위한 클래스
export class CreateMovieDto {

    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;
    
    // 말그대로 옵션으로 설정
    @IsOptional()
    @IsString({ each: true })
    readonly genres: string[];
}