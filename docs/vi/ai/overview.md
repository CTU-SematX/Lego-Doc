# Tổng quan Trợ giúp AI

LegoCity tích hợp **trợ giúp AI** tùy chọn để hỗ trợ biên tập viên và quản trị viên trong việc tạo descriptions, labels và các tác vụ nội dung khác. Các tính năng AI này là **hoàn toàn tùy chọn** và có thể được cấu hình theo môi trường.

---

## Mục đích

Trợ giúp AI trong LegoCity được thiết kế để:

- **Hỗ trợ biên tập viên nội dung** với các mô tả được tạo cho:

  - Map layers,
  - data views,
  - entity types,
  - form fields.

- **Giảm công việc lặp lại** trong việc viết văn bản tương tự cho nhiều layers, views hoặc entity types.

- **Đề xuất cải tiến** cho:
  - labels,
  - tooltips,
  - summaries,
  - schema descriptions.

---

## Phạm vi

Trợ giúp AI là **bổ sung** và **không quyết định**.

Logic nền tảng **không phụ thuộc** vào tính năng AI:

- Chức năng cốt lõi hoạt động mà không có AI
- Seeds, migrations và workflows độc lập với AI
- Tính năng AI là các cải tiến thuần túy bổ sung

---

## Ví dụ trường hợp sử dụng

### Use Case 1: Mô tả lớp

**Quy trình làm việc:**

1. Biên tập viên tạo lớp bản đồ mới cho entity type "WeatherObserved"
2. Nhấp **"Generate Description with AI"**
3. AI đề xuất:
   > "Lớp này hiển thị dữ liệu quan sát thời tiết theo thời gian thực,
   > bao gồm nhiệt độ, độ ẩm và áp suất khí quyển."
4. Biên tập viên **xem xét**, **chỉnh sửa nếu cần** và **chấp nhận**

**Lợi ích:**

- Tiết kiệm thời gian viết mô tả cho các entity types phổ biến
- Đảm bảo tính nhất quán giữa các lớp
- Đề xuất thuật ngữ người dùng có thể dễ tiếp cận

### Use Case 2: Tóm tắt View

**Quy trình làm việc:**

1. Biên tập viên tạo view "Flood Monitoring" với:

   - Lớp thời tiết (lượng mưa)
   - Vùng nguy cơ lũ lụt
   - Cảm biến mức nước

2. AI đề xuất văn bản giới thiệu:
   > **Bảng điều khiển giám sát lũ lụt**
   >
   > Giám sát nguy cơ lũ lụt theo thời gian thực trên toàn thành phố:
   >
   > - Theo dõi cường độ mưa và lượng mưa tích lũy
   > - Xem các vùng nguy cơ lũ lụt cao
   > - Giám sát mức nước sông tại các điểm chính

**Lợi ích:**

- Các bản nháp nhanh cho views mới
- Định dạng nội dung có cấu trúc
- Các câu hỏi ví dụ cho tooltips trợ giúp

### Use Case 3: Nhãn khối

**Quy trình làm việc:**

1. Khối `LayerToggle` được cấu hình với các lớp:

   - `flood-risk-high`
   - `flood-risk-medium`
   - `flood-risk-low`

2. AI đề xuất nhãn ngắn gọn:
   > "Vùng nguy cơ lũ lụt"

**Lợi ích:**

- Quy ước đặt tên nhất quán
- Thuật ngữ thân thiện với người dùng
- Tiết kiệm các tác vụ đặt tên lặp đi lặp lại

### Use Case 4: Câu hỏi ví dụ

**Quy trình làm việc:**

1. AI phân tích cấu hình view
2. Đề xuất các câu hỏi mẫu người dùng có thể hỏi:
   - "Khu vực nào có nguy cơ lũ lụt cao nhất?"
   - "Cường độ mưa hiện tại là bao nhiêu?"
   - "Khu vực nào nên được sơ tán?"

**Lợi ích:**

- Giúp với tài liệu trợ giúp
- Cải thiện hướng dẫn người dùng
- Xác định các trường hợp sử dụng phổ biến

### Nguyên tắc kiểm soát biên tập viên

::: success Con người trong vòng lặp
Trong mọi trường hợp:

- ✅ Đầu ra AI **có thể chỉnh sửa** và **có thể đảo ngược**
- ✅ Biên tập viên giữ **toàn quyền kiểm soát**
- ✅ AI cung cấp **đề xuất**, không phải quyết định cuối cùng
- ✅ Nội dung trước đó được bảo tồn
  :::

---

## Cấu hình và môi trường

### Thiết lập môi trường

Để sử dụng plugin AI, mỗi môi trường phải có:

=== "Cấu hình bắt buộc" - Khóa API hoặc thông tin xác thực cho nhà cung cấp đã chọn - Cấu hình plugin trong cấu hình Payload - Biến môi trường cho secrets - Tùy chọn: Cài đặt cụ thể cho nhà cung cấp

=== "Cấu hình ví dụ"

=== "Biến môi trường"

````bash title=".env" # Cấu hình nhà cung cấp AI
ENABLE_AI=true
AI_PROVIDER=openai
OPENAI_API_KEY=sk-...

    # Tùy chọn: Cài đặt cụ thể cho nhà cung cấp
    AI_MODEL=gpt-4
    AI_TEMPERATURE=0.7
    AI_MAX_TOKENS=500
    ```

### Nguyên tắc cấu hình

::: warning Thực hành tốt nhất về bảo mật
- 🔐 Lưu trữ khóa nhà cung cấp AI như **secrets** (env vars hoặc secret manager)
- 🌍 Cho phép **nhà cung cấp hoặc khóa khác nhau cho mỗi môi trường**
- 🔌 Cho phép AI **được tắt hoàn toàn**
- 🚫 Không bao giờ commit khóa API vào version control
:::

### Ma trận môi trường

| Môi trường      | AI được bật | Nhà cung cấp      | Trường hợp sử dụng        |
| --------------- | ----------- | ----------------- | ------------------------- |
| **Development** | ✅ Có       | OpenAI (test key) | Kiểm tra tính năng AI     |
| **Staging**     | ✅ Có       | OpenAI (prod key) | Xác thực pre-prod         |
| **Production**  | ⚠️ Tùy chọn | OpenAI (prod key) | Hỗ trợ chỉnh sửa nội dung |
| **CI/CD**       | ❌ Không    | None              | Kiểm thử tự động          |

### Độc lập nền tảng

::: success Không phụ thuộc
Logic nền tảng **không được phụ thuộc** vào các tính năng AI:

- Chức năng cốt lõi hoạt động mà không cần AI
- Seeds, migrations và workflows độc lập với AI
- Các tính năng AI là các cải tiến bổ sung thuần túy
:::

---

## Hướng dẫn trải nghiệm người dùng

Khi thêm AI helpers vào admin UI:

### 1. Hành động AI rõ ràng

::: tip Yêu cầu Ý định của người dùng
- Thêm các button rõ ràng: "Tạo mô tả", "Đề xuất nhãn"
- **Không bao giờ** tự động chạy AI mà không có hành động của người dùng
- Cung cấp keyboard shortcuts cho người dùng chuyên nghiệp
- Hiển thị trạng thái đang tải trong các thao tác AI
:::

**Ví dụ:**

```tsx
<Button
  onClick={handleGenerateDescription}
  icon={<SparklesIcon />}
  loading={isGenerating}
>
  ✨ Tạo mô tả bằng AI
</Button>
````

### 2. Hiển thị đề xuất rõ ràng

::: tip Đầu ra AI minh bạch

- Hiển thị AI output dưới dạng **nội dung gợi ý**, không phải sự thật cuối cùng
- Cho phép biên tập viên **accept**, **edit** hoặc **discard**
- Bảo toàn original content nếu được thay thế
- Hiển thị comparison view khi hữu ích
  :::

**Giao diện ví dụ:**

```
┌─────────────────────────────────────┐
│ Đề xuất từ AI:                      │
│                                     │
│ "Lớp này hiển thị thời gian thực..." │
│                                     │
│ [✓ Chấp nhận] [✎ Chỉnh sửa] [✗ Từ chối]   │
└─────────────────────────────────────┘

Nội dung gốc: "Lớp thời tiết"
```

### 3. Các hành động tập trung

::: tip Nhiệm vụ nhỏ, mục đích đơn

- Giữ các actions **nhỏ và tập trung** (một field hoặc section)
- Tránh các chuỗi AI phức tạp, nhiều bước
- Cho phép chấp nhận từng phần các đề xuất
- Cho phép hoàn tác/làm lại
  :::

### 4. Xử lý lỗi khéo léo

::: warning Xử lý lỗi tốt
Timeouts, vấn đề nhà cung cấp hoặc cấu hình không hợp lệ nên:

- Hiển thị **thông báo lỗi rõ ràng**
- Đề xuất **cách khắc phục thực tế**
- **Không bao giờ phá vỡ** toàn bộ admin UI
- Quay lại chỉnh sửa thủ công
  :::

**Ví dụ thông báo lỗi:**

```
❌ Tạo nội dung AI thất bại

Nhà cung cấp AI hiện không khả dụng. Bạn có thể:
• Thử lại sau vài phút
• Chỉnh sửa trường thủ công
• Liên hệ hỗ trợ nếu vấn đề vẫn tiếp diễn

[Thử lại] [Chỉnh sửa thủ công]
```

---

## An toàn và giới hạn

### Quyền riêng tư dữ liệu

::: danger Bảo vệ dữ liệu nhạy cảm
**Tránh gửi tới các nhà cung cấp AI bên ngoài:**

- Thông tin nhận dạng cá nhân (PII)
- Thông tin xác thực
- Chi tiết hệ thống nội bộ
- Toàn bộ cấu hình
- Nhật ký ứng dụng

**Những gì nên gửi:**

- ✅ Nhãn và mô tả trường
- ✅ Nội dung công khai
- ✅ Tên loại thực thể chung
- ✅ Siêu dữ liệu không nhạy cảm
  :::

### Xác thực nội dung

::: warning Xem xét đầu ra AI
**Xử lý đầu ra AI như không đáng tin cậy cho đến khi có sự chấp thuận của con người:**

- Xem xét để kiểm tra độ chính xác kỹ thuật
- Kiểm tra các sự thật bịa đặt
- Xác minh ánh xạ thực thể
- Xác thực với kiến thức chuyên môn
- Đảm bảo tính nhất quán về thương hiệu/giọng điệu
  :::

### Giới hạn ngữ cảnh

**Chỉ gửi ngữ cảnh cần thiết:**

```typescript
// ✅ Tốt: Ngữ cảnh tối thiểu
{
  field: "description",
  entityType: "WeatherObserved",
  Thuộc tính: ["temperature", "humidity"]
}

// ❌ Xấu: Ngữ cảnh quá mức
{
  field: "description",
  fullConfig: {...}, // Toàn bộ cấu hình payload
  logs: [...],       // Nhật ký hệ thống
  secrets: {...}     // Biến môi trường
}
```

### Yêu cầu minh bạch

::: info Giao tiếp rõ ràng
Tài liệu và giao diện nên làm rõ:

- Đầu ra AI có thể **không chính xác hoặc không đầy đủ**
- Biên tập viên **chịu trách nhiệm** cho nội dung cuối cùng
- AI là một **công cụ**, không phải thay thế cho chuyên môn
- Xem xét của con người **luôn được yêu cầu**
  :::

---

## Hướng dẫn phát triển và đóng góp

### 1. Kiến trúc tách biệt

::: success Tách biệt mối quan tâm

- Giữ các tính năng AI **độc lập** khỏi chức năng cốt lõi
- Plugin AI nên **có thể sử dụng độc lập**
- Không ràng buộc các luồng cốt lõi với hoàn thiện AI:
  - Seed data generation
  - Database migrations
  - Authentication/authorization
  - API responses
    :::

### 2. Lời nhắc minh bạch

::: success Tài liệu hóa hành vi AI

- Lưu prompts ở **nơi được tài liệu rõ ràng**
- Làm chúng **ngắn gọn và cụ thể theo lĩnh vực**:
  - Smart city concepts
  - NGSI-LD terminology
  - LegoCity architecture
- Kiểm soát phiên bản các thay đổi lời nhắc
- Xem xét cập nhật lời nhắc trong PR
  :::

**Lưu trữ lời nhắc ví dụ:**

```typescript title="src/ai/prompts/layer-description.ts"
export const LAYER_DESCRIPTION_PROMPT = `
Tạo mô tả thân thiện với người dùng cho lớp bản đồ thành phố thông minh.

Ngữ cảnh:
- Loại thực thể: {entityType}
- Lĩnh vực: {domain}
- Thuộc tính: {attributes}

Yêu cầu:
- Tối đa 2-3 câu
- Ngôn ngữ không chuyên môn
- Giải thích người dùng có thể học được gì từ lớp này
- Đề cập tần suất cập nhật nếu có liên quan

Đầu ra: Mô tả rõ ràng, ngắn gọn.
`;
```

### 3. Sử dụng có thể cấu hình

::: success Kiểm soát linh hoạt

- Cho phép admins **bật/tắt AI theo từng bộ sưu tập**
- Cho phép admins **bật/tắt AI theo từng trường**
- Hỗ trợ **hạn chế dựa trên vai trò**:
  - Chỉ biên tập viên có thể sử dụng AI features
  - Người xem không thể kích hoạt hành động AI
- Cung cấp công tắc AI toàn cục
  :::

**Example Cấu hình:**

```typescript
payloadAI({
  collections: {
    layers: {
      enabled: true,
      fields: ["description", "tooltip"],
      roles: ["editor", "admin"],
    },
    views: {
      enabled: true,
      fields: ["summary"],
      roles: ["admin"],
    },
  },
});
```

### 4. Ghi nhật ký có ý thức về quyền riêng tư

::: success Ghi nhật ký tối thiểu

- Log AI interactions **chỉ cho debugging**
- Tránh lưu **full prompts và responses**
- Không bao giờ log **nội dung nhạy cảm**
- Sử dụng mức nhật ký phù hợp:
  - INFO: Hành động AI được kích hoạt
  - DEBUG: Siêu dữ liệu yêu cầu/phản hồi
  - ERROR: Failures và timeouts
    :::

**Example Log Structure:**

```typescript
logger.info("AI action", {
  action: "generate_description",
  collection: "layers",
  field: "description",
  provider: "openai",
  model: "gpt-4",
  duration_ms: 1250,
  success: true,
  // ❌ Không ghi: lời nhắc, phản hồi, nội dung người dùng
});
```

---

## Kiểm thử các tính năng AI

### Kiểm thử đơn vị

Kiểm thử tích hợp AI mà không gọi nhà cung cấp thực:

```typescript title="ai-helpers.test.ts"
import { generateLayerDescription } from "./ai-helpers";

jest.mock("@payloadcms/plugin-ai");

describe("Trình tạo mô tả lớp AI", () => {
  it("tạo mô tả với đầu vào hợp lệ", async () => {
    const result = await generateLayerDescription({
      entityType: "WeatherObserved",
      Lĩnh vực: "environment",
    });

    expect(result).toContain("weather");
    expect(result.length).toBeLessThan(500);
  });

  it("xử lý lỗi nhà cung cấp một cách khéo léo", async () => {
    mockAIProvider.mockRejectedValue(new Error("Hết thời gian chờ API"));

    await expect(generateLayerDescription({ ... })).rejects.toThrow(
      "Tạo nội dung AI thất bại"
    );
  });
});
```

### Kiểm thử tích hợp

Kiểm thử các tính năng AI với nhà cung cấp giả lập:

```typescript
describe("Tích hợp AI", () => {
  it("tắt giao diện AI khi không cấu hình nhà cung cấp", () => {
    process.env.ENABLE_AI = "false";

    const { queryByText } = render(<LayerEditor />);

    expect(queryByText("Generate with AI")).toBeNull();
  });
});
```

---

## Tóm tắt

!!! success "Điểm chính"
**Trợ giúp AI trong LegoCity là tùy chọn và hỗ trợ**

    **Mục đích:**

    - Hỗ trợ với mô tả, nhãn và các tác vụ nội dung
    - Không chịu trách nhiệm cho hành vi cốt lõi hoặc kiến trúc
    - Cải thiện bổ sung thuần túy cho trải nghiệm chỉnh sửa    **Cấu hình:**

    - Sử dụng biến môi trường và lưu trữ bí mật
    - Có thể khác nhau theo môi trường (dev, staging, prod)
    - Phải cho phép các tính năng AI được tắt hoàn toàn
    - Không có chức năng cốt lõi phụ thuộc vào AI

    **Nguyên tắc trải nghiệm người dùng:**

    - Hành động AI rõ ràng và do người dùng kích hoạt
    - Đầu ra có thể đảo ngược và chỉnh sửa được
    - Được đánh dấu rõ ràng là đề xuất, không phải sự thật
    - Xử lý lỗi khéo léo

    **Phát triển:**

    - Giữ tích hợp AI tách biệt khỏi nền tảng cốt lõi
    - Tài liệu hóa lời nhắc và hành vi một cách minh bạch
    - Áp dụng nguyên tắc an toàn và quyền riêng tư
    - Ghi nhật ký tối thiểu và có trách nhiệm

**Các trang liên quan:**

- [AI Providers](providers.md)
- [OpenRouter Integration](openrouter.md)
- [AI Use Cases](use-cases.md)
- [Creating New Blocks](../development/blocks.md)
