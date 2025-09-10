import os
import re

def generate_image_loader(images_folder, output_file):
    # Получаем список всех файлов в папке с изображениями
    image_files = [f for f in os.listdir(images_folder) 
                  if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'))]
    
    # Сортируем для удобства
    image_files.sort()
    
    # Генерируем импорты
    imports = []
    variable_names = []
    
    for image_file in image_files:
        # Генерируем имя переменной из имени файла
        var_name = re.sub(r'[^a-zA-Z0-9]', '', os.path.splitext(image_file)[0])
        # Если имя начинается с цифры, добавляем префикс
        if var_name[0].isdigit():
            var_name = 'img_' + var_name
        
        imports.append(f"import {var_name} from '../images/{image_file}';")
        variable_names.append((image_file, var_name))
    
    # Генерируем содержимое файла
    content = """// Автоматически сгенерированный файл
// Предзагружаем все изображения
"""
    
    # Добавляем импорты
    for imp in imports:
        content += imp + "\n"
    
    content += "\nconst imageMap = {\n"
    
    # Добавляем записи в imageMap
    for image_file, var_name in variable_names:
        content += f"  '{image_file}': {var_name},\n"
    
    content += """};

export const loadImage = (imageName) => {
  return imageMap[imageName] || '';
};
"""
    
    # Записываем в файл
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Файл {output_file} успешно создан!")
    print(f"Обработано {len(image_files)} изображений")

# Использование
if __name__ == "__main__":
    images_folder = "C:\Users\SeaRook\Desktop\icarus\Chronicle-of-Ardant\Chronicle of Ardant\src\images"  # Путь к папке с изображениями
    output_file = "imageLoader.js"  # Выходной файл
    
    generate_image_loader(images_folder, output_file)