# Transformers 库简介

Transformer 模型是由 Vaswani 等人在 2017 年提出的一种深度学习模型，最初用于自然语言处理任务。与传统的循环神经网络（RNN）和卷积神经网络（CNN）不同，Transformer 完全基于注意力机制，能够更好地捕捉序列数据中的长距离依赖关系。

## 自然语言处理

NLP（Natural Language Processing，自然语言处理）是人工智能的一个重要分支，旨在使计算机能够理解、生成和处理人类语言。NLP 涉及多个任务，包括但不限于：

- 对整个句子进行分类：获取评论的情感，检测电子邮件是否为垃圾邮件，确定句子在语法上是否正确或两个句子在逻辑上是否相关。
- 对句子中的每个词进行分类：识别句子的语法成分（名词、动词、形容词）或命名实体（人、地点、组织）。
- 生成文本内容：用自动生成的文本完成提示，用掩码词填充文本中的空白。
- 从文本中提取答案：给定问题和上下文，根据上下文中提供的信息提取问题的答案。
- 从输入文本生成新句子：将文本翻译成另一种语言，对文本进行总结。

## 简单 Transformers 库调用

Transformers 库中最基本的对象是 pipeline() 函数。它将模型与所需的预处理和后续处理步骤连接起来，使我们能够通过直接输入任何文本并获得最终的结果

```python
from transformers import pipeline
classifier = pipeline("sentiment-analysis")
result = classifier("I love transformers library!")
print(result)
# [{'label': 'POSITIVE', 'score': 0.9998}]
```

目前 可用的一些pipeline 有：

- `feature-extraction` （获取文本的向量表示）
- `fill-mask` （完形填空）
- `ner` （命名实体识别）
- `question-answering` （问答）
- `sentiment-analysis` （情感分析）
- `summarization` （提取摘要）
- `text-generation` （文本生成）
- `translation` （翻译）
- `zero-shot-classification` （零样本分类）