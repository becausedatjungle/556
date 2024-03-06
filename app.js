var started = false;
var shufflePattern = [];

var app = new Vue({
    el: '#faslkkfsakl',
    data() {
        return {
            shuffleItems: [],
            countdown: {
                hours: "00",
                minutes: "00",
                seconds: "00"
            },
            items: [
                {
                    class: 'knife',
                    name: 'Stiletto Knife | Tiger Tooth',
                    quality: 'Minimal Wear',
                    img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJlY60g_7zNqnumXlQ5sJ0teXI8oTht1i1uRQ5fT2nIY_BJFJvZAnT-gK9lOm9hcLu6Z_Mz3pgu3Vx7H6OmxG3hEofbeFxxavJ4ASE6yw/360fx360f',
                },
                {
                    class: 'knife',
                    name: 'Bowie Knife | Fade',
                    quality: 'Minimal-Wear',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrrukGpV7fp9g-7J4bP5iUazrl06N2H2cYXBe1BsNVDX_wLvw-vqhMS_u5jBn3dgvSR35nyJnhOw10oacKUx0rse6B8s/360fx360f',
                },

                {
                    class: 'gloves',
                    name: 'Sport Gloves | Vice',
                    quality: 'Well-Worn',
                    img: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/sporty_gloves_sporty_blue_pink_light_large.0da7dccfde04268a4289ad4b6c00a23a124a624e.png',
                },
                {
                    class: 'gloves',
                    name: 'Specialist Gloves | Crimson Web',
                    quality: 'Well-Worn',
                    img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1h3LAVbv6mxFABs3OXNYgJR_Nm1nYGHnuTgDKzUlHhu-sB1teTE8YXghWu4qgE7NnelJdSRJgQ_M1nZ-QTrx7vv18PpvcjLwSQyv3V35X2IyxDjiExOOuJmm7XAHqjzIu8S/360fx360f',
                },
                {
                    class: 'gloves',
                    name: "Sport Gloves | Pandora's Box",
                    quality: 'Battle-Scarred',
                    img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eOmgZKbm_LLO77QgHJu5MRjjeyPo46i0A3lqhJsYzr6dYHDdgc_N16G_1C7l7jpg8O_vs6fzHcx6SV0tGGdwUINRWWZ1w/360fx360f',
                },

                {
                    class: 'covert',
                    name: 'Glock-18 | Bullet Queen',
                    quality: 'Factory-New',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-cluX5MrLVk2Vu5Mx2gv3--Y3nj1H6r0plMm-lcNSRIQc6Z1GE-1e6wObt1JG46cmbmHo37yAn4HjfmUTmhAYMMLKVxXRrDQ/360fx360f',
                },
                {
                    class: 'covert',
                    name: 'Glock-18 | Neo-Noir',
                    quality: 'Minimal Wear',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJmo-Chcj4OrzZglRd6dd2j6fCrN_x2Fe2rRJrZW6nJdCdcARvZFuFqAftkO67gJHquZ7LyXpr6SQq-z-DyI0SmLqC/360fx360f',
                },
                {
                    class: 'covert',
                    name: 'USP-S | Neo-Noir',
                    quality: 'Factory-New',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh-TLPbTYhFRd4cJ5ntbN9J7yjRqxr0M6Z2v3IdWUIA8-YlmD_AW6wO7shZbv6ZudnHM1u3V0t3jYmx22n1gSORPnfTIP/360fx360f',
                },
                {
                    class: 'classified',
                    name: 'AK-47 | Ice Coaled',
                    quality: 'Factory-New',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5k5SDnvnzIITdn2xZ_Pp9i_vG8MKsigDi_Es9ZGmgJ4eQJwNqZ1iB-FG9xe3p15HttZianXYwv3RxtnfUgVXp1lJgFZ41/330x192',
                },
                {
                    class: 'restricted',
                    name: 'AWP | Atheris',
                    quality: 'Minimal-Wear',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5cyzhr-HnvD8J4Tdl3lW7YsjjuyWoNil0FXjqEZlZmryJtKQegQ-Yg7V-QK5wr_s1Je06syYzSNgpGB8shyWYXeM/330x192',
                },
                {
                    class: 'covert',
                    name: 'Desert Eagle | Printstream',
                    quality: 'Field-Tested',
                    img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7duJhJKCmePnJ6nUl2Zu5cB1g_zMyoD0mlOx5UJpYjj2d9LAdAI5YlqE-Vm_wuy715Xvv5iby3prs3IjtHrVmEez0xhSLrs4cktNb_c/360fx360f',
                },
                {
                    class: 'classified',
                    name: 'AK-47 | Jet Set',
                    quality: 'Minimal-Wear',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszfdDFO08iklZaOm_LwDLrawjxu5Mx2gv3--Y3nj1H6_ENkMmzwddWRdQVqZguE-lO-wunngpDttJ-bzyBn6SAi4S2LlkS0gAYMMLJosXbvAg/360fx360f',
                },
                {
                    class: 'covert',
                    name: 'USP-S | Printstream',
                    quality: 'Minimal-Wear',
                    img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jkIbLfgnhF-sBwh9bM8Ij8nVmLpxIuNDztcYHGegM5aVzZq1btkrzmhZG6vZXInXFq7iYn5XrUmRDlgEoYOLFpg-veFwup27LxDA/360fx360f',
                },
                {
                    class: 'covert',
                    name: 'AK-47 | The Empress',
                    quality: 'Field-Tested',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLPr7Vn35c18lwmO7Eu9ql2gDg8kBoYWqlddLHIVI8YFnZqFTrk73mjMW-v87ByHRluiB2533D30vgNUkukuM/360fx360f',
                },
                {
                    class: 'covert',
                    name: 'M4A4 | The Emperor',
                    quality: 'Field-Tested',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLPr7Vn35c18lwmO7Eu9z20A3i_0NqYmmhLYCWcAFoM1HW81i4wLi9hJ65u5_InXFm7nEgsy3D30vg5cOjZss/360fx360f',
                },
                {
                    class: 'covert',
                    name: 'M4A1-S | Cyrex',
                    quality: 'Factory-New',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITSj3lU8Pp9g-7J4bP5iUazrl1tZ22hIIaQcVNsZluC_gC6xrjnhJS06c-bySdruih27Srfl0Oy0xEfcKUx0knZQYH9/360fx360f',
                },
                {
                    class: 'covert',
                    name: 'AWP | Asiimov',
                    quality: 'Field-Tested',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7cqWdQ-sJ0xOzAot-jiQa3-hBqYzvzLdSVJlQ3NQvR-FfsxL3qh5e7vM6bzSA26Sg8pSGKJUPeNtY/360fx360f',
                },
                {
                    class: 'covert',
                    name: 'USP-S | Kill Confirmed',
                    quality: 'Field-Tested',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j_OrfdqWhe5sN4mOTE8bP4jVC9vh4DPzixc9OLcQU2Z1vQ_FfrwbvnhJ6-uJ_PnXAyuCUmtHfenRW00h5MPOVt1_KYHULeWfL4W83H_Q/360fx360f',
                },
                {
                    class: 'covert',
                    name: 'AK-47 | Asiimov',
                    quality: 'Factory-New',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLP7LWnn9u5MRjjeyPo9qgjlfnqUtvMGHzIICWew45aV-B_1bqw7u5gse16JTKwXBnvigg5WGdwUL3VYtbUA/360fx360f',
                },
                {
                    class: 'covert',
                    name: 'M4A4 | Asiimov',
                    quality: 'Field-Tested',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJQJD_9W7m5a0mvLwOq7cqWdQ-sJ0xOvEpIj0jAbkqEE_ZD3xctLGJAE_Zw7U-QTowefth8TpvM_InHZh6XQ8pSGKWYJAoJI/360fx360f',
                },
                {
                    class: 'restricted',
                    name: 'AK-47 | Slate',
                    quality: 'Minimal-Wear',
                    img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08ykm4aOhOT9PLXQmlRd4cJ5ntbN9J7yjRqw-0o4ZWvwcIbEdQQ7Ml7Tr1nvwufvgMC6us-bmHZi6HEgsCvYlkC_n1gSOasHEuYf/360fx360f',
                },
                {
                    class: 'covert',
                    name: 'AWP | Hyper Beast',
                    quality: 'Factory-New',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJK9cyzhr-JkvbnJ4Tdn2xZ_Pp9i_vG8MKg3VGyqkY5YGn6INfDdQdtMF6B_1fsx7u-1p-678_Jy3A1vXVxsXePgVXp1hRVxWZh/360fx360f',
                },
                {
                    class: 'covert',
                    name: 'FAMAS | Commemoration',
                    quality: 'Minimal-Wear',
                    img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf1OD3dzxP7c-JmIWMlvTtDLzemm9u5Mx2gv3--Y3nj1H6-EdsYmr7LILGcwQ8Zl6E-wK2wr2615Lp7ZSfm3pgviIqsSndnRy1gQYMMLK6CbACJQ/360fx360f',
                },
                {
                    class: 'restricted',
                    name: 'Desert Eagle | Sunset Storm',
                    quality: 'Factory-New',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTi5H7c-im5KGqOT8PLHeqWdY781lteXA54vwxgOwrUc6Nmr7ItLEIQc2MA3Sq1ntwrvqhcLqu8mfm3tivCV2sCyIlxapwUYbFeY_M6c/360fx360f',
                },
                {
                    class: 'milspec',
                    name: 'USP-S | Torque',
                    quality: 'Factory-New',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jkIbTWhG5C-8xnteXI8oTht1i1uRQ5fWDyd9LAdQ4_MgzQqVm7wey918TuupufynUw6Sd05C2MyRfmgBgfbuBxxavJa8F12Qc/330x192',
                },
                {
                    class: 'restricted',
                    name: 'R8 Revolver | Banana Cannon',
                    quality: 'Factory-New',
                    img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3di59_oSJloGFlvn1DLfYkWNF18lwmO7Eu9mljgS2_EFlMmr1dYKVd1I6aQrU-wW7yerphpS_uMmbmyZiv3IrtinD30vgO3cooPQ/360fx360f',
                },
                {
                    class: 'classified',
                    name: 'AK-47 | Jet Set',
                    quality: 'Minimal-Wear',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszfdDFO08iklZaOm_LwDLrawjxu5Mx2gv3--Y3nj1H6_ENkMmzwddWRdQVqZguE-lO-wunngpDttJ-bzyBn6SAi4S2LlkS0gAYMMLJosXbvAg/360fx360f',
                },
                {
                    class: 'milspec',
                    name: 'Tec-9 | Rebel',
                    quality: 'Factory-New',
                    img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b09qkkYWPmPrLP7LWnn9u5MRjjeyP946i0QHs_kFuYTj7LNKRJlI9M1nV_li_xL3qgJS778yazidmuid25GGdwUJ41XiT4g/360fx360f',
                },
                {
                    class: 'restricted',
                    name: 'USP-S | Overgrowth',
                    quality: 'Factory-New',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5OCkvDxDLnDl31e18l4jeHVyoD0mlOx5UZtZDv7LdOSelRoNFCCqwW5kr_u1Mfuu8idn3M3uiJz4HmPnUHmgx5SLrs4BeHLjR0/360fx360f',
                },
                {
                    class: 'classified',
                    name: 'USP-S | Target Acquired',
                    quality: 'Minimal-Wear',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q4mFg_L4P7LWk2VS7fp8i-7E-5j0t1i9rBsoDDWiZtHAbANqaQ6CqAW6x-zohZe1vpXNz3VmuSB34yzayUO_gEpEPeI90PObGF2AR_seFzKVvVk/360fx360f',
                },
                {
                    class: 'covert',
                    name: 'M4A1-S | Printstream',
                    quality: 'Minimal-Wear',
                    img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITBhGJf_NZlmOzA-LP5gVO8vywwMiukcZice1M9ZViD-ATrle7v15O46cifzHFhunZ243yInxW-10sZOrBp1qTLVxzAUNxEoFAP/360fx360f',
                },
                {
                    class: 'milspec',
                    name: 'Tec-9 | Rebel',
                    quality: 'Factory-New',
                    img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b09qkkYWPmPrLP7LWnn9u5MRjjeyP946i0QHs_kFuYTj7LNKRJlI9M1nV_li_xL3qgJS778yazidmuid25GGdwUJ41XiT4g/360fx360f',
                },
                {
                    class: 'covert',
                    name: 'P90 | Asiimov',
                    quality: 'Minimal-Wear',
                    img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqPv9NLPFqWdQ-sJ0xLnC9Nvz31K3-0BuMGD7d4PGIQM-ZwuDrgS3w7zshsO5tJ7PmHoysig8pSGKpkWB0BI/360fx360f',
                },
                {
                    class: 'classified',
                    name: 'MP5-SD | Phosphor',
                    quality: 'Field-Tested',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X09qzh5SCgfb4DL_Dn3tu5Mx2gv3--Y3nj1H6qERtMj_zdYGddlM7NAuE_AS7leu5h8C7vZTPyCA2uyUnsH3VnEbj1AYMMLI6P7BpVA/330x192',
                },
                {
                    class: 'classified',
                    name: 'MP9 | Hydra',
                    quality: 'Factory-New',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJK9diklb-HnvD8J4Tdl3lW7Ytz3b6Xpo2t2QW2-BE_aj3yLdKVdgM-Yw6Cq1Hrlb3p1sTpv5jMznRlpGB8snH8MK4B/330x192',
                },
                {
                    class: 'milspec',
                    name: 'Sawed-Off | Limelight',
                    quality: 'Factory-New',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYS0mPHyDLfYm25u5Mx2gv3--Y3nj1H680Q6MTumJYOcdVNvYVyB_1DsxOi5hsS86pqayiQwvHEnsynbmhC00gYMMLL5vqM2Eg/330x192',
                },
                {
                    class: 'covert',
                    name: 'M4A4 | Buzz Kill',
                    quality: 'Minimal-Wear',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW08-zl5SEhcj4OrzZglRd6dd2j6eVpon22QXlrhVpZmGlI4LGdg9rYlnW-FDqxevq05-_7szNyHZkuyR3-z-DyIA1jQSm/330x192',
                },
                {
                    class: 'restricted',
                    name: 'Glock-18 | Nuclear Garden',
                    quality: 'Well-Worn',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73fyhB4Nm3hr-YnOL4P6jukXlU7ctOhuDG_ZjKhFWmrBZyYG6gJ4GTd1A3Y1CB-gC-wey7h56_752fmHU1vnYm5XaLm0PmiE1EbPsv26InNt9zoA/330x192',
                },
                {
                    class: 'classified',
                    name: 'USP-S | Cortex',
                    quality: 'Factory-New',
                    img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NFOhujT8om73QPnrRBkMGz6IICTdVM9ZlCG-QTqyObmhcXpuJWbmyBmsiZ37SuInwv330-gQJA5lg/360fx360f',
                },
                {
                    class: 'covert',
                    name: 'SSG 08 | Dragonfire',
                    quality: 'Factory-New',
                    img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJkJKKkPj6NbLDk1RC68phj9bN_Iv9nGu4qgE7Nnf3LISddw5taAzQ8lm6xOq9gZTpuZ6fyXA3syIltHffnxbkhxEYOLZtm7XAHgXm-xFt/360fx360f',
                },
                {
                    class: 'classified',
                    name: 'MAC-10 | Disco Tech',
                    quality: 'Minimal-Wear',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJmoGIhfLLP7LWnn9u5MRjjeyPrdzziQay-0VlYjzwI9OTJwRvY1_V_wO2kOm5g8Xv6JubnyNruXYht2GdwUKMosOtLg/330x192',
                },
                {
                    class: 'classified',
                    name: 'SG 553 | Integrale',
                    quality: 'Factory-New',
                    img: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JhoGHm-7LP7LWnn9u5MRjjeyPrNyhigKy_EM4MG6gLNDAcwY5NVqDrgO7kL290cK87sjPn3RrvHEhs2GdwUKariuTHQ/360fx360f',
                },
                {
                    class: 'classified',
                    name: 'AK-47 | Redline',
                    quality: 'Factory-New',
                    img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPv9NLPFqWdQ-sJ0xL6VrNj3jlCy_0tpZj-nINOTIwRqMwzZ8lLrle6-h5K_75XJnCRruSA8pSGKEtwySt8/360fx360f',
                },
            ],
        };
    },
    methods: {
        randomList() {
            function shuffle(array) {
                let currentIndex = array.length;
                let temporaryValue;
                let randomIndex;
                let i = 0;

                while (0 !== currentIndex) {
                    let rnd;

                    if (started) {
                        rnd = shufflePattern[i++];
                    } else {
                        rnd = Math.random();
                        shufflePattern.push(rnd);
                    }

                    randomIndex = 11;
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            }

            if(localStorage.getItem('items')) {
                return JSON.parse(localStorage.getItem('items'))
            }

            this.shuffleItems = shuffle(this.items);
            return this.shuffleItems 
        },
    },
    computed: {
        showItem() {
            return this.items[25];
        },
    },
})

let winModal = () => {
    let elem = document.querySelector('.win-modal');
    elem.classList.toggle('show');
};

let startAuth = () => {
    location.href = "/login.php"
}

let timeWinModal = () => {
    setTimeout(() => {
        $('#r_result').slideDown();
    }, 7000);
};

function r_start() {
    if (started) return;
    started = true;

    let expire = Date.now() + 7200000

    localStorage.setItem('items', JSON.stringify(app.shuffleItems))
    localStorage.setItem('items_expire', expire.toString())

    countdown(expire)

    $('.roll').addClass('roll_anim');
    timeWinModal();
}

$('.t_case_open').on('click', function (e) {
    e.preventDefault();
    $('.t_case').fadeOut(500);
    setTimeout(function () {
        $('#faslkkfsakl').fadeIn(500);
        setTimeout(function () {
            r_start();
        }, 500);
    }, 500);
});

function countdown(expiry) {
    let countdownDateTime = new Date(expiry).getTime();

    let timeInterval = setInterval(() => {
        let currentDateTime = new Date().getTime();
        let remainingDayTime = countdownDateTime - currentDateTime;

        let totalHours = Math.floor( ( remainingDayTime % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
        let totalMinutes = Math.floor( ( remainingDayTime % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
        let totalSeconds = Math.floor( ( remainingDayTime % ( 1000 * 60 ) ) / 1000 );

        if(remainingDayTime >= 0) {
            app.countdown.hours = totalHours > 9 ? totalHours : "0"+totalHours
            app.countdown.minutes = totalMinutes > 9 ? totalMinutes : "0"+totalMinutes
            app.countdown.seconds = totalSeconds > 9 ? totalSeconds : "0"+totalSeconds
        } else {
            clearInterval(timeInterval);

            localStorage.removeItem('items')
            localStorage.removeItem('items_expire')
            location.reload()
        }
    }, 1000)
}

$(document).ready(() => {
    if(!localStorage.getItem('items') || !localStorage.getItem('items_expire')) {
        return;
    }

    countdown(parseInt(localStorage.getItem('items_expire')))

    app.items = JSON.parse(localStorage.getItem('items'))

    $('.t_case').hide()
    $('#faslkkfsakl').show()
    $('.roll').addClass('roll_anim without_transition')

    $('#r_result').slideDown();
})