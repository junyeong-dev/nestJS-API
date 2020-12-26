import { IsString, IsNumber, IsOptional } from "class-validator";

// DTO : Data Transfer Object 계층간 데이터 교환을 위한 클래스
// class-validator를 통해 Data Validation(데이터 유효성 검사)을 함
// @IsString(), @IsNumber(), @IsDate() 등등 여러가지 옵션이 있음
// Referance : https://github.com/typestack/class-validator#validation-decorators
export class CreateMovieDto {

    // String 타입
    @IsString()
    readonly title: string;

    // Number 타입
    @IsNumber()
    readonly year: number;
    
    // 말그대로 옵션으로 설정
    @IsOptional()
    @IsString({ each: true })
    readonly genres: string[];
}