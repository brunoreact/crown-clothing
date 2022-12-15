import './categories-main.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const CategoriesMain = ({ categories }) => {
    return (
        <div className="categories-container">
            {
                categories.map((category) => ( // single line return
                    <CategoryItem key={category.id} category={category} />
                ))
            }
        </div>
    )
}

export default CategoriesMain;