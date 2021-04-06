type Color = 'Black' | 'White'
type Field = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Position {
    constructor(public field: Field, public rank: Rank) {}
}

// Допустим, мы хотим, чтобы пользователи
// не инстанцировали новый класс Piece непосредственно,
// а расширяли его, создавая классы Queen,
// Bishop и т. д., и инстанцировали их.
// Система типов позволит сделать это с помощью ключевого слова abstract:
// new Piece() - не может быть т.к. абстр. класс и следовательно
// конструктор не может быть определенн

abstract class Piece {
    protected position: Position

    constructor(
        private color: Readonly<Color>,
        public field: Field,
        public rank: Rank
    ) {
        this.position = new Position(field, rank)
    }

    moveTo = (position: Position): void => {
        this.position = position
    }

    abstract canMoveTo(position: Position): boolean

    distanceFrom = (position: Position) => {
        return {
            rank: Math.abs(position.rank - this.rank),
            field: Math.abs(
                position.field.charCodeAt(0) - this.field.charCodeAt(0)
            ),
        }
    }
}

class King extends Piece {
    canMoveTo(position: Position): boolean {
        let distance = this.distanceFrom(position)
        return distance.rank < 2 && distance.field < 2
    }
}
class Queen extends Piece {
    canMoveTo(position: Position): boolean {
        let distance = this.distanceFrom(position)
        const { rank, field } = distance
        return rank === 0 || field === 0 || field === rank
    }
}
class Bishop extends Piece {
    canMoveTo(position: Position): boolean {
        let distance = this.distanceFrom(position)
        const { rank, field } = distance
        return rank === 0 || field === 0
    }
}

// ...

new King('Black', 'D', 1)

// ...
